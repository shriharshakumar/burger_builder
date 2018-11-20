import React from 'react';
//import {withRouter} from 'react-router-dom';

import Burger from '../Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div class={classes.CheckoutSummary}>
            <div style={{width:'100%', margin:'auto'}}>
                <Burger {...props} />
            </div>
            <Button btnType="Success" clicked={props.checkoutContinue}>CONTINUE</Button>
            <Button btnType="Danger" clicked={props.checkoutCancel}>CANCEL</Button>
        </div>
    );
}

export default CheckoutSummary;