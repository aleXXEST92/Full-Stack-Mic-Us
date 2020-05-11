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


