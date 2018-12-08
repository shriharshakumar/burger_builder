import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutSummary from '../../components/Burger/CheckoutSummary/CheckoutSummary';

import ContactData from './ContactData/ContactData';

class Checkout extends Component {

    componentWillMount() {
        // const query = new URLSearchParams(this.props.location.search);
        // const ingredients = {};
        // for(let param of query.entries()){
        //     if( param[0] === "price" ){
        //         this.setState({price: param[1]})
        //     }else{
        //         ingredients[param[0]] = +param[1];
        //     }
        // }
        // this.setState({ingredients: ingredients});
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
                    ingredients={this.props.ings} 
                    checkoutContinue={this.checkoutContinue}
                    checkoutCancel={this.checkoutCancel} />;
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    component={ContactData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        totalPrice: state.totalPrice
    }
}

export default connect(mapStateToProps) (Checkout);