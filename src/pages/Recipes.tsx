
import React from 'react';
import IngredientTree from './component/IngredientTree';
import uuid from 'react-uuid';
import "./css/recipes.css"

import { FC } from 'react';

type Recipe = {
    name: string;
    treeData: any;
}

type RecipesProps = {
    recipes: Recipe[];
}

export const Recipes: FC<RecipesProps> = ({ recipes }) => {
    return (
        <div>
            <div className='recipe_container'>
                {recipes.map((item) => {
                    return (
                        <div key={uuid()} className="recipe">
                            <IngredientTree {...item} />
                        </div>
                    );
                })}
            </div>

        </div>
    );
};