// export const addArtist = (artist) => {
//     console.log(artist, "artists")
//     return {
//         type: 'ADD_ARTIST',
//         value: artist
//     }
// }

export const addArtist = (artist) => {
    // console.log(artist)
    return (dispatch) => {
        fetch("/api/artists", {
            method:"post",
            headers: {    
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' },
            mode:"cors",
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin',
            body:JSON.stringify({
                artist:artist
            })
        })
        .then(res => res.json())
        .then(response => {
            console.log("response", response)
            const action={
                type: 'ADD_ARTIST',
                value: response
            }
            dispatch(action)
        })
    }
}

