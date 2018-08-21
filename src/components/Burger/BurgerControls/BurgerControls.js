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
        <p>Current price: Rs. {props.price}</p>
        {controls.map(ctrl => (
            <BurgerControl 
                        key={ctrl.label} 
                        type={ctrl.label} 
                        label={ctrl.label}
                        added={() => props.ingredientsAdded(ctrl.type)}
                        removed={() => props.ingredientsRemoved(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}    />
        ))}
    </div>
);

export default burgerControls;