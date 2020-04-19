import { combineReducers } from 'redux';

const artist = (state = [], action) => {
    switch(action.type) {
        case 'ADD_ARTIST':
            return [ ...state, action.value ]
        default:
            return state
    }
}

export default combineReducers({ artist })