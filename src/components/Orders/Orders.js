import React from 'react';

import classes from './Orders.css';

const Orders = (props) => {

    
    const loadedIngredients = [];
    for(let ingredientName in props.ingredients) {
        loadedIngredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]  
        })
    }
    
    const ingredientsOutput = loadedIngredients.map(ig => {
        return <span style={{
            textTransform: 'capitalize',
            display: 'inline-block',
            margin: '0 8px',
            border: '1px'
        }}>{ig.name}-{ig.amount}</span>
    });

    
    return(
        <div className={classes.Orders}>
            <p>Ingredients: {ingredientsOutput} </p>
                <p>Price: <strong>INR {props.price}</strong></p>

        </div>
    );
};

export default Orders;