import React, { useState } from 'react';
import Search from './component/search';
// import Table from './component/table';
// import TableExcel from './component/table_excel';
import { Recipes } from './Recipes';
import { useEffect } from 'react';


// const data = [
//     ['apple', 'red', 'fruit'],
//     ['banana', 'yellow', 'fruit'],
//     ['carrot', 'orange', 'vegetable'],
//     ['date', 'brown', 'fruit'],
//     ['eggplant', 'purple', 'vegetable'],
// ];


export const Home = () => {
    const [keyword, setKeyword] = useState('');

    const handleSearch = (value: string) => {
        setKeyword(value);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    console.log(keyword)

    return (
        <div>
            {/* <Search value={keyword} onChange={handleSearch} />
            <Table data={data} keyword={keyword} />

            <TableExcel /> */}

            <h1>料理</h1>
            <label htmlFor="search">關鍵字搜尋</label>
            <Search value={keyword} onChange={handleSearch} />
            <Recipes keyword={keyword} />
        </div>
    );
};
