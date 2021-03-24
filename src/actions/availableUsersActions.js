import { FETCH_USERS, SELECT_USER } from './types';


export const fetchUsers = () => dispatch => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(users => dispatch({
        type: FETCH_USERS,
        payload: users
        })
    );
}
export const selectUser = (user) => dispatch => {
    dispatch({
        type: SELECT_USER,
        payload: user
    });
}