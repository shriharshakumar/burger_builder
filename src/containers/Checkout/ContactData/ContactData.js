import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import './ContactData.css'

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }

    render() {
        return(
            <div>
                <h4>Enter your contact</h4>
                <form>
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="text" name="email" placeholder="Your Email" />
                    <input type="text" name="Street" placeholder="Your Street" />
                    <input type="text" name="Postal Code" placeholder="Your Postal Code" />
                    <Button btnType="Success">CONTINUE</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;