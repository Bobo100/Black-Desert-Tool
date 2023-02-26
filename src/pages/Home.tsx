import React, { useState } from 'react';
import Search from './component/search';
import Table from './component/table';
import TableExcel from './component/table_excel';
import { Recipes } from './Recipes';
import 見習 from './../json/1.見習.json';
import 熟練 from './../json/2.熟練.json';
import 專家 from './../json/3.專家.json';
import 匠人 from './../json/4.匠人.json';
import 名匠 from './../json/5.名匠.json';
import 道人 from './../json/6.道人.json';

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

            <h1>見習區</h1>
            <Recipes recipes={見習} />
            <h1>熟練區</h1>
            <Recipes recipes={熟練} />
            <h1>專家區</h1>
            <Recipes recipes={專家} />
            <h1>匠人區</h1>
            <Recipes recipes={匠人} />
            <h1>名匠區</h1>
            <Recipes recipes={名匠} />
            <h1>道人區</h1>
            <Recipes recipes={道人} />


        </div>
    );
};
