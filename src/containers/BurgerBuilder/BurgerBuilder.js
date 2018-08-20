import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

import Aux from '../../hoc/Auxiliary';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 25,
    meat: 40,
    bacon: 30
}

class BurgerBuilder extends Component {

    constructor(props){
        super(props);

        this.state = {
            ingredients: {
                cheese: 0,
                salad: 0,
                bacon: 0,
                meat: 0
            },
            totalPrice: 4
        }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>    
                <BurgerControls 
                    ingredientsAdded={this.addIngredientHandler} />
            </Aux>
        )
    }
}

export default BurgerBuilder;