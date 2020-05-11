const initialState = {
    artists: [],
    loading: false

}

export default function(state = initialState, action) {
    switch(action.type) {
        case 'GET_ARTISTS':
            return {
                ...state,
                artists: action.payload,
                loading: false
            }
        case 'ADD_ARTIST':
            return {
                ...state,
                artists: [action.payload, ...initialState.artists]
             }
        default:
            return state
    }
}