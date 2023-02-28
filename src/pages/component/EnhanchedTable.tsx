import React, { FC, useEffect, useState } from 'react';
import uuid from 'react-uuid';
import "./css/enhanchedTable.css"

interface DataItem {
    [key: string]: any;
}
export const EnhanchedTable: FC<DataItem> = ({ json_data }) => {

    const [data, setData] = useState<DataItem[]>([]);
    const [fieldNames, setFieldNames] = useState<string[]>([]);

    const fieldOrder = ['層數', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '長', '廣', '故', '琉', '東'];

    useEffect(() => {
        setData(json_data);
        // const fieldNames = Object.keys(json_data[0]);
        // setFieldNames(fieldNames);

        const fieldNames = fieldOrder.filter(f => Object.keys(json_data[0]).includes(f));
        const remainingFields = Object.keys(json_data[0]).filter(f => !fieldNames.includes(f));
        setFieldNames([...fieldNames, ...remainingFields]);

        console.log(fieldNames);

    }, []);



    // <div className='table_container'>
    //     <table className='sticky_header'>
    //         <thead>
    //             <tr>
    //                 {/* 用欄位名稱來渲染表頭 */}
    //                 {fieldNames.map((name) => (
    //                     <th key={name}>{name}</th>
    //                 ))}
    //             </tr>
    //         </thead>
    //     </table>

    //     <div className='table_view'>
    //         <table>
    //             <tbody>
    //                 {data.map((row, index) => (
    //                     <tr key={uuid()}>
    //                         {/* 用欄位名稱來取得對應的資料 */}
    //                         {fieldNames.map((name) => (
    //                             <td key={name}>{row[name]}</td>
    //                         ))}
    //                     </tr>
    //                 ))}
    //             </tbody>
    //         </table>
    //     </div>
    // </div>

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

    // return (
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>層數</th>
    //                 <th>8</th>
    //                 <th>9</th>
    //                 <th>10</th>
    //                 <th>11</th>
    //                 <th>12</th>
    //                 <th>13</th>
    //                 <th>14</th>
    //                 <th>15</th>
    //                 <th>長</th>
    //                 <th>廣</th>
    //                 <th>故</th>
    //                 <th>琉</th>
    //                 <th>東</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {data.map((item) => (
    //                 <tr key={uuid()}>
    //                     <td>{item.層數}</td>
    //                     <td>{item['8']}</td>
    //                     <td>{item['9']}</td>
    //                     <td>{item['10']}</td>
    //                     <td>{item['11']}</td>
    //                     <td>{item['12']}</td>
    //                     <td>{item['13']}</td>
    //                     <td>{item['14']}</td>
    //                     <td>{item['15']}</td>
    //                     <td>{item.長}</td>
    //                     <td>{item.廣}</td>
    //                     <td>{item.故}</td>
    //                     <td>{item.琉}</td>
    //                     <td>{item.東}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // );
};

