import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import classes from './ContactData.css';

class ContactData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'name'
                },
                value:''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'street'
                },
                value: ''
            },
            zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'zipcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'country'
                },
                value: ''
            },    
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value:'fastest', displayName: 'Fastest'},
                        {value:'slowest', displayName: 'Slowest'}
                    ]
                },
                value: 'fastest'
            }
        },
        loading: false,
    }

    orderPlaced = (event) => {
        event.preventDefault();
        //console.log(this.props.ingredients);
        this.setState({loading: true});
        
        const formData = {};
        for(let key in this.state.orderForm){
            formData[key] = this.state.orderForm[key].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData
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

    inputChangeHandler = (event, key) => {
        const updatedForm = {
            ...this.state.orderForm
        }
        const updatedKeyElement = {
            ...updatedForm[key]
        }

        updatedKeyElement.value = event.target.value;
        updatedForm[key] = updatedKeyElement;
        this.setState({orderForm: updatedForm});
    }

    render() {
        const fillOutForm=[];
        for(let key in this.state.orderForm){
            fillOutForm.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderPlaced}>
                <h4>Enter your contact</h4>
                {fillOutForm.map(orderElement => (
                    <Input
                        key={orderElement.id}
                        elementType={orderElement.config.elementType}
                        elementConfig={orderElement.config.elementConfig}
                        value={orderElement.config.value}
                        changed={(event) => this.inputChangeHandler(event, orderElement.id)}
                    />
                ))}
                <Button
                    btnType="Success"
                >CONTINUE</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />
        }
        return(
            <div className={classes.ContactData}>
                {form}
            </div>
        );
    }
}

export default ContactData;