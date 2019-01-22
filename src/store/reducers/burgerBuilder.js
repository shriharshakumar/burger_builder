import * as actionTypes from '../actions/actionTypes';

const INGREDIENT_PRICES = {
    salad: 20,
    cheese: 25,
    meat: 40,
    bacon: 30
}

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const reducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            console.log(actionTypes.ADD_INGREDIENT);
            return {
                ...state,
                ingredients: { 
                    ...state.ingredients,
                    [action.ingredientName] : state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.FAILED_LOADING_INGREDIENTS:
            return{
                ...state,
                error: true
            };
        case actionTypes.INIT_INGREDIENTS:
            return{
                ...state,
                error:false,
                ingredients: action.ingredients
            };
        default: return state;
    }
};

export default reducer;