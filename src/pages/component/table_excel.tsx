import React, { useState } from 'react';
import { read, utils } from 'xlsx';

interface TableData {
    headers: string[];
    rows: string[][];
}

const TableExcel: React.FC = () => {
    const [tableData, setTableData] = useState<TableData>();

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {

        const files = event.target.files;
        if (!files || !files.length) {
            console.log("test")
            return;
        }

        const file = files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            if (!event.target) return;
            const dataUrl = event.target.result as string;
            const data = dataUrl.split(',')[1];
            const workbook = read(data, { type: 'base64' });
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            // defval: "" 为了解决null的問題
            const rows = utils.sheet_to_json(worksheet, { header: 1, defval: "" }) as string[][];
            setTableData({ headers: rows[0], rows: rows.slice(1) });
        };
        reader.readAsDataURL(file);
    };
    // console.log(tableData)


    return (
        <div>
            <input type="file" onChange={handleFileSelect} />
            {tableData && (
                <table>
                    <thead>
                        <tr>
                            {tableData.headers.map((header, i) => (
                                <th key={i}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.rows.map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, j) => {
                                    return (
                                        <td key={j}>{cell}</td>
                                    )
                                }
                                )}
                            </tr>
                        ))}

                    </tbody>
                </table>
            )}
        </div>
    );
};

export default TableExcel;
