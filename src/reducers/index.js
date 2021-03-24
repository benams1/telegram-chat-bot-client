import { combineReducers } from 'redux';
import postReducer from './availableUsersReducer';
import messagesReducer from "./messagesReducer";

export default combineReducers({
    availableUsers: postReducer,
    messages: messagesReducer
})