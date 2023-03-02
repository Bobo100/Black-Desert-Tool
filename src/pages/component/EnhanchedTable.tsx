import React, { FC, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import "./css/enhanchedTable.css"

interface DataItem {
    [key: string]: any;
}
const EnhanchedTable: FC<DataItem> = ({ json_data }) => {

    const [data, setData] = useState<DataItem[]>([]);
    const [fieldNames, setFieldNames] = useState<string[]>([]);

    const fieldOrder = ['層數', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '長', '廣', '故', '琉', '東'];

    useEffect(() => {
        setData(json_data);

        const fieldNames = fieldOrder.filter(f => Object.keys(json_data[0]).includes(f));
        const remainingFields = Object.keys(json_data[0]).filter(f => !fieldNames.includes(f));
        setFieldNames([...fieldNames, ...remainingFields]);

    }, []);

    return (
        <>
            <div className='table_view'>
                <table>
                    <thead>
                        <tr>
                            {/* 用欄位名稱來渲染表頭 */}
                            {fieldNames.map((name) => (
                                <th key={name}>{name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={uuid()}>
                                {/* 用欄位名稱來取得對應的資料 */}
                                {fieldNames.map((name) => (
                                    <td key={name}>{row[name]}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default EnhanchedTable;