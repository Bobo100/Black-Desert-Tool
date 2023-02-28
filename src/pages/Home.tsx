import React, { useState } from 'react';
import Search from './component/search';
import Table from './component/table';
import TableExcel from './component/table_excel';
import { Recipes } from './Recipes';


const data = [
    ['apple', 'red', 'fruit'],
    ['banana', 'yellow', 'fruit'],
    ['carrot', 'orange', 'vegetable'],
    ['date', 'brown', 'fruit'],
    ['eggplant', 'purple', 'vegetable'],
];


export const Home = () => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (value: string) => {
        setKeyword(value);
    };

    return (
        <div>
            {/* <Search value={keyword} onChange={handleSearch} />
            <Table data={data} keyword={keyword} />

            <TableExcel /> */}

            <Recipes />
        </div>
    );
};
