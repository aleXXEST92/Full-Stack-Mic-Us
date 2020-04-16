import { combineReducers } from 'redux';

const artist = (state = [], action) => {
    switch(action.type) {
        case 'ARTIST_POST':
            console.log(action.value)
            return [ ...state, action.value ]
        default:
            return state
    }
}

export default combineReducers({ artist })