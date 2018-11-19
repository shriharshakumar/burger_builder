import React from 'react';

import Burger from '../Burger';
import Button from '../../UI/Button/Button';

import classes from './CheckoutSummary.css';

const CheckoutSummary = (props) => {
    return (
        <div class={classes.CheckoutSummary}>
            <div style={{width:'100%', margin:'auto'}}>
                <Burger {...props} />
            </div>
            <Button btnType="Success" onClick>CONTINUE</Button>
            <Button btnType="Danger" onClick>CANCEL</Button>
        </div>
    );
}

export default CheckoutSummary;