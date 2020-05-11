// export const addArtist = (artist) => {
//     console.log(artist, "artists")
//     return {
//         type: 'ADD_ARTIST',
//         value: artist
//     }
// }


import axios from 'axios'

export const addArtist = (artist) => (dispatch) => {
    axios
        .post('http://localhost:5000/api/artists', artist)
        .then(res => 
            dispatch({
                type: 'ADD_ARTIST',
                payload: res.data
            }))
}


// export const addArtist = (artist) => {
//     console.log(artist, "artists")
//     return {
//         type: 'ADD_ARTIST',
//         value: artist
//     }
// }

// export const getArtist = () => dispatch => {
//     dispatch(setItemsLoading())
//     axios
//         .get('/api/artists')
//         .then(res => {   
//             dispatch({
//             type: "GET_ARTISTS",
//             payload: res.data
//         })
//         console.log(res.data)
//         }
//     )
// }

// export const setItemsLoading = () => {
//     return {
//         type: "ITEMS_LOADING"
//     }
// }