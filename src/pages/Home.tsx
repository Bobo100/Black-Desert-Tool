import React, { useState } from 'react';
import Search from './component/search';
import Table from './component/table';
import TableExcel from './component/table_excel';

import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

import key from "../lib/black-desert-378517-94f7666d54d8.json"

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

    // 建立 JWT 客戶端
    // const client = new JWT({
    //     email: key.client_email,
    //     key: key.private_key,
    //     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    // });


    return (
        <div>
            <Search value={keyword} onChange={handleSearch} />
            <Table data={data} keyword={keyword} />

            <TableExcel />
        </div>
    );
};
