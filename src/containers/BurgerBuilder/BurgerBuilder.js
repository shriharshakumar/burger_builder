import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
            totalPrice: 4,
            purchasable: false,
            purchasing: false
        }
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);

        this.setState({purchasable: sum > 0});
    } 

    addIngredientsHandler = (type) => {
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        } 
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceSubtraction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceSubtraction;

        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        alert('You continue!');
    }

    render(){
        const disabled = {
            ...this.state.ingredients
        }
        for(let key in disabled){
            disabled[key] = disabled[key] <= 0
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>    
                <BurgerControls 
                    ingredientsAdded={this.addIngredientsHandler}
                    ingredientsRemoved={this.removeIngredientsHandler}
                    disabled = {disabled}
                    price = {this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable = {this.state.purchasable} />
            </Aux>
        )
    }
}

export default BurgerBuilder;