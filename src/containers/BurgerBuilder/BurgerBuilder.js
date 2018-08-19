import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {

    constructor(props){
        super(props);

        this.state = {
            ingredients: {
                cheese: 2,
                salad: 2,
                bacon: 1,
                meat: 1
            }
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>    
                <BurgerControls />
            </Aux>
        )
    }
}

export default BurgerBuilder;