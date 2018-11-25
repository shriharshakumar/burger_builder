import React from 'react';

import classes from './Input.css';

const Input = (props) => {

    let inputElement = null;
    switch(props.elementType) {
        case('input'): 
            inputElement = <input className={classes.InputElement} onChange={props.changed} {...props.elementConfig} />;
                break;
        case('textArea'): 
            inputElement = <textarea className={classes.InputElement} onChange={props.changed} {...props.elementConfig} />
                break;
        case('select'):
                inputElement=(
                        <select className={classes.InputElement} onChange={props.changed} {...props.elementConfig} >
                            {props.elementConfig.options.map(option => (
                                <option key={option.value} value={option.value}>{option.displayName}</option>
                            ))}
                        </select>
                    );
                break;
        default:
            inputElement = <input className={classes.InputElement} onChange={props.changed} {...props.elementConfig} />
                break;
    }

    return(
        <div className={classes.Input}>
            <label className={classes.InputElement} > {props.label} </label>
            {inputElement}
        </div>
    )
}

export default Input;