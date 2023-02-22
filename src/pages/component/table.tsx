import React from 'react';
import './css/table.css';

interface TableProps {
  data: string[][];
  keyword: string;
}

const Table: React.FC<TableProps> = ({ data, keyword }) => {
  // const filteredData = keyword
  //   ? data.filter(row => row.some(cell => cell.includes(keyword)))
  //   : data;

  return (
    // <table>
    //   <tbody>
    //     {filteredData.map((row, i) => (
    //       <tr key={i}>
    //         {row.map((cell, j) => (
    //           <td key={j} className={cell.includes(keyword) ? 'highlight' : ''}>{cell}</td>
    //         ))}
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <table>
      <tbody>
        {data.map((row, i) => {
          const shouldHighlight = row.some(cell => cell.includes(keyword));
          return (
            <tr key={i} className={shouldHighlight ? 'highlight' : ''}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  );
};

export default Table;
