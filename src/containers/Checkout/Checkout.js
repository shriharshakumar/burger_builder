import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';

import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients:null,
        price: 0
    }

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            if( param[0] === "price" ){
                this.setState({price: param[1]})
            }else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients});
    }

    checkoutContinue = () => {
        this.props.history.replace('/check-out/contact-data');
    }

    checkoutCancel = () => {
        //console.log(this.props);
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.state.ingredients} 
                    checkoutContinue={this.checkoutContinue}
                    checkoutCancel={this.checkoutCancel} />;
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={(props) => (<ContactData ingredients={this.state.ingredients} price={this.state.price} {...props} />) } />
            </div>
        );
    }
}

export default Checkout;