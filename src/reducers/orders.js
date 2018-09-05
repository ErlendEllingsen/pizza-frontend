
export default function(state = [], action) {

    if (action.type === 'ADD_ORDER') {
        return [...state, action.payload];
    }

    return state;
}