import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return{
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const initIngredients = (ingredients) => {
    return dispatch => {
        console.log(this.props);
        axios.get('/ingredients.json')
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(failedLoadingIngredients());
            });
    }
};

export const failedLoadingIngredients = () => {
    return {
        type: actionTypes.FAILED_LOADING_INGREDIENTS
    };
}

export const setIngredients = (ingredients) => {
    return{
        type: actionTypes.INIT_INGREDIENTS,
        ingredients: ingredients
    }
};