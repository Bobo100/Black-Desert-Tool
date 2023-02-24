
import React from 'react';
import recipes from './../json/recipes.json';
import IngredientTree from './component/IngredientTree';
import uuid from 'react-uuid';
import "./css/recipes.css"

export const Recipes = () => {
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