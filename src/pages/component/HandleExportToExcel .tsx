import React from 'react';
import * as XLSX from 'xlsx';

const handleExportToExcel = (tableId: string, fileName: string) => {
    // Get table element by id
    const table = document.getElementById(tableId);

    // // Convert HTML to workbook object
    const workbook = XLSX.utils.table_to_book(table, { sheet: 'Sheet JS' });

    // // Save workbook as Excel file
    XLSX.writeFile(workbook, `${fileName}.xlsx`);
};

export const MyTable = () => {
    return (
        <div>
            <button onClick={() => handleExportToExcel('my-table', 'my-file')}>
                Export to Excel
            </button>
            <table id="my-table">
                <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Data 1-1</td>
                        <td>Data 1-2</td>
                        <td>Data 1-3</td>
                    </tr>
                    <tr>
                        <td>Data 2-1</td>
                        <td>Data 2-2</td>
                        <td>Data 2-3</td>
                    </tr>
                    <tr>
                        <td>Data 3-1</td>
                        <td>Data 3-2</td>
                        <td>Data 3-3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
