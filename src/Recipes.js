import React from 'react';
import style from './recipe.module.css';

function Recipe({title,calories,img,ingredients}){
    
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h4>{calories}</h4>
            <img className={style.image} src={img} alt=""/>

        </div>
    );
}

export default Recipe;