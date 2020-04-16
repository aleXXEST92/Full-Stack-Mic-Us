export const addArtist = (artist) => {
    console.log(artist, "artists")
    return function(dispatch) {
        fetch("/", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },  body: JSON.stringify(artist) // body data type must match "Content-Type" header
        })
          .then(response => {
            response.json().then(addArtist => {
              dispatch(
                artistPosted(addArtist)
              )
            })
          })
          .catch(err => console.error('Caught error: ', err))
      }
    }

    export const artistPosted = (newArtist) => {
        return{
            type:"ARTIST_POST",
            value:newArtist
        }
    }


