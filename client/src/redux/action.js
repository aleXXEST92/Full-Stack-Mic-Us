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
        .post('https://guarded-dawn-55624.herokuapp.com/api/artists', artist)
        .then(res => 
            dispatch({
                type: 'ADD_ARTIST',
                payload: res.data
            }))
}


