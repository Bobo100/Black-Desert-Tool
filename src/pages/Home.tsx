import React, { useState } from 'react';
import Search from './component/search';
import Table from './component/table';
import TableExcel from './component/table_excel';
import Tree, { Node } from './component/tree';
import IngredientTree from './component/IngredientTree';
import treeData from './../json/tree-data.json';

const data = [
    ['apple', 'red', 'fruit'],
    ['banana', 'yellow', 'fruit'],
    ['carrot', 'orange', 'vegetable'],
    ['date', 'brown', 'fruit'],
    ['eggplant', 'purple', 'vegetable'],
];

// const nodes: Node[] = [
//     {
//         id: "1",
//         label: "火腿三明治",
//         children: [
//             {
//                 id: "2",
//                 label: "鬆軟的麵包",
//                 children: [
//                     {
//                         id: "3",
//                         label: "牛奶",
//                     },
//                     {
//                         id: "4",
//                         label: "雞蛋",
//                     },
//                     {
//                         id: "5",
//                         label: "麵團",
//                     },
//                     {
//                         id: "6",
//                         label: "發酵劑",
//                     },
//                 ],
//             },
//             {
//                 id: "7",
//                 label: "烤香腸",
//             },
//             {
//                 id: "8",
//                 label: "蔬菜",
//             },
//             {
//                 id: "9",
//                 label: "雞蛋",
//             }
//         ],
//     },
// ];


export const Home = () => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (value: string) => {
        setKeyword(value);
    };

    return (
        <div>
            <Search value={keyword} onChange={handleSearch} />
            <Table data={data} keyword={keyword} />

            <TableExcel />

            {/* <Tree nodes={nodes} /> */}

            <IngredientTree {...treeData} />

        </div>
    );
};
