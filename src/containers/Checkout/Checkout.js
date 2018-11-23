import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';

import ContactData from './ContactData/ContactData';

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
        this.props.history.replace('/check-out/contact-data');
    }

    checkoutCancel = () => {
        console.log(this.props);
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutContinue={this.checkoutContinue}
                    checkoutCancel={this.checkoutCancel} />;
                <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
            </div>
        );
    }
}

export default Checkout;