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
                actionTypes.FAILED_LOADING_INGREDIENTS
            });
    }
};

export const setIngredients = (order) => {
    axios.post('/orders.json', order)
        .then(response => {
            this.setState({
                loading: false,
            });
            this.props.history.push("/");
        })
        .catch(error => {
            this.setState({
                loading: false,
            })
        });
};