import { INITIATE_MESSAGES, ADD_MESSAGE } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case INITIATE_MESSAGES:
            return action.payload;
        case ADD_MESSAGE:
            state.push(action.payload)
            return state
        default:
            return state;
    }
}