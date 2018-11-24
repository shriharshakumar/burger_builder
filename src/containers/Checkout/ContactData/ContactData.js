import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import classes from './ContactData.css';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderPlaced = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
        name: 'Harsha',
        address: {
                    street:'RES road',
                    zipcode: '573134',
                    country: 'India'
                },
                email: 'abc@gmail.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({
                    loading: false,
                });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({
                    loading: false,
                })
            });

    }

    render() {
        let form = (
            <form>
                <input type="text" name="name" placeholder="Your Name" />
                <input type="text" name="email" placeholder="Your Email" />
                <input type="text" name="Street" placeholder="Your Street" />
                <input type="text" name="Postal Code" placeholder="Your Postal Code" />
                <Button
                    btnType="Success"
                    clicked={this.orderPlaced}
                >CONTINUE</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;