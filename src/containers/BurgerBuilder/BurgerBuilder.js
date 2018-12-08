import React, { Component } from 'react';
//import { HashRouter } from 'react-router-dom';
//import {Redirect} from 'react-router-dom';
//import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

import Aux from '../../hoc/Auxiliary/Auxiliary';

class BurgerBuilder extends Component {

    //constructor(props){
    //    super(props);

    state = {
        purchasing: false,
        loading: false,
        error: false
    }
    

    componentDidMount () {
        //console.log(this.props);
        // axios.get('/ingredients.json')
        // .then(response => {
        //     this.setState(
        //         {
        //             ingredients: response.data
        //         }
        //     );
        // })
        // .catch(error => {
        //     this.setState({error: true});
        // });
    }

    updatePurchaseState (ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            },0);

        return sum > 0;
    } 

    addIngredientsHandler = (type) => {
        // const oldCount = this.props.ings[type];
        // const updatedCount = oldCount + 1;
        // const updatedIngredients = {
        //     ...this.props.ings
        // };
        // updatedIngredients[type] = updatedCount;

        // const priceAddition = INGREDIENT_PRICES[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice + priceAddition;

        // this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        // this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        // const oldCount = this.props.ings[type];
        // if(oldCount <= 0){
        //     return;
        // } 
        // const updatedCount = oldCount - 1;
        // const updatedIngredients = {
        //     ...this.props.ings
        // };
        // updatedIngredients[type] = updatedCount;

        // const priceSubtraction = INGREDIENT_PRICES[type];
        // const oldPrice = this.state.totalPrice;
        // const newPrice = oldPrice - priceSubtraction;

        // this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        // this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        //alert('You continue!');
        
        //hashHistory.push('/checkout');
        //<Redirect to="/checkout"/>

        // const ingredient_parameter = [];
        // for(let i in this.props.ings){
        //     ingredient_parameter.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]))
        // }
        // ingredient_parameter.push("price=" + this.props.totalPrice);
        // const query_parameter = ingredient_parameter.join('&');

        this.props.history.push('/check-out');

    }

    render(){
        const disabled = {
            ...this.props.ings
        };
        for(let key in disabled){
            disabled[key] = disabled[key] <= 0
        }
        let orderSummary = <Spinner />
        if(this.state.loading){
            orderSummary = <Spinner />
        }
        let burger = this.state.error ? "Something went wrong !" : <Spinner />;
        if(this.props.ings){
            burger = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                    <BurgerControls
                        ingredientsAdded={this.props.onIngredientsAdded}
                        ingredientsRemoved={this.props.onIngredientsRemoved}
                        disabled={disabled}
                        price={this.props.totalPrice}
                        ordered={this.purchaseHandler}
                        purchasable={this.updatePurchaseState(this.props.ings)} />
                </Aux>

            );
            orderSummary = <OrderSummary
                ingredients={this.props.ings}
				price={this.props.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        )
    }
 
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: (ingName) => dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientsRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( BurgerBuilder, axios));