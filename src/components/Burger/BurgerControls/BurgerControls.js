import React from 'react';
import classes from './BurgerControls.css'
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
    { label:'salad', type: 'salad'},
    { label:'cheese', type: 'cheese' },
    { label:'bacon', type: 'bacon' },
    { label:'meat', type: 'meat' }
];


const burgerControls = (props) => (
    <div className={classes.BurgerControls}>
        <p>Current price: <strong>Rs. {props.price}</strong></p>
        {controls.map(ctrl => (
            <BurgerControl 
                        key={ctrl.label} 
                        type={ctrl.label} 
                        label={ctrl.label}
                        added={() => props.ingredientsAdded(ctrl.type)}
                        removed={() => props.ingredientsRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}    />
        ))}

        <button 
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered} >ORDER NOW!</button>
    </div>
);

export default burgerControls;