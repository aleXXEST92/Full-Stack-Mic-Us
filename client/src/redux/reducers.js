import { combineReducers } from 'redux';

const artist = (state = [], action) => {
    switch(action.type) {
        case 'GET_ARTISTS':
            return [ ...state ]
        case 'ADD_ARTIST':
            return [ ...state, action.value ]
        default:
            return state
    }
}

export default combineReducers({ artist })