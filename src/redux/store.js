import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    creditCards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CREDIT_CARD":
            return {
                creditCards:[...state.creditCards, action.payload]
            };
        case 'DELETE_CREDIT_CARD':
            return {
                ...state,
                    creditCards: state.creditCards.filter(creditCard => creditCard.id !== action.payload)
                };
        default: 
            return state;
    }
}

const store = configureStore({reducer});
export default store;