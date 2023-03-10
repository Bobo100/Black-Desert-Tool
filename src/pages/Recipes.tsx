import React, { useMemo, useState } from 'react';
import { RecipesComponent } from './component/RecipesComponent';
import 見習 from './../json/1.見習.json';
import 熟練 from './../json/2.熟練.json';
import 專家 from './../json/3.專家.json';
import 匠人 from './../json/4.匠人.json';
import 名匠 from './../json/5.名匠.json';
import 道人 from './../json/6.道人.json';

interface RecipesProps {
    keyword: string;
}

// export const Recipes = () => {
// export const Recipes: React.FC<RecipesProps> = ({ keyword }) => {
export const Recipes = ({ keyword }: RecipesProps) => {

    return (
        <div>
            <h1>見習區 13萬</h1>
            <RecipesComponent recipes={見習} keyword={keyword} />
            <h1>熟練區 20萬</h1>
            <RecipesComponent recipes={熟練} keyword={keyword} />
            <h1>專家區 30萬</h1>
            <RecipesComponent recipes={專家} keyword={keyword} />
            <h1>匠人區 40萬</h1>
            <RecipesComponent recipes={匠人} keyword={keyword} />
            <h1>名匠區 55萬</h1>
            <RecipesComponent recipes={名匠} keyword={keyword} />
            <h1>道人區 80萬</h1>
            <RecipesComponent recipes={道人} keyword={keyword} />

        </div>
    );
};

