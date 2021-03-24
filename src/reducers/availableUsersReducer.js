import { FETCH_USERS, SELECT_USER } from '../actions/types';

const initialState = {
    users:[],
    selectedUser: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case SELECT_USER:
            return {
                ...state,
                selectedUser: action.payload
            };
        default:
            return state;
    }
}