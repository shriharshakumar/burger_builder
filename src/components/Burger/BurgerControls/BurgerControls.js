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
        {controls.map(ctrl => (
            <BurgerControl 
                        key={ctrl.label} 
                        type={ctrl.label} 
                        added={() => props.ingredientsAdded(ctrl.type)}    />
        ))}
    </div>
);

export default burgerControls;