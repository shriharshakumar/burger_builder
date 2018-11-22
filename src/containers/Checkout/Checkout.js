import React, { Component } from 'react';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients:{
            salad: 1,
            cheese: 1,
            meat: 1,
            bacon: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }

    checkoutContinue = () => {
        this.props.history.replace('/check-out/my-order');
    }

    checkoutCancel = () => {
        console.log(this.props);
        this.props.history.goBack();
    }

    render() {
        return <CheckoutSummary ingredients={this.state.ingredients} checkoutContinue={this.checkoutContinue} checkoutCancel={this.checkoutCancel} />;
    }
}

export default Checkout;