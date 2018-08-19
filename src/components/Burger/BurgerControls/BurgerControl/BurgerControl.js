import React from 'react';
import classes from './BurgerControl.css'

const burgerControl = (props) => (
    <div className={classes.BurgerControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less}>Less</button>
        <button className={classes.More}>More</button>
    </div>
);

export default burgerControl;