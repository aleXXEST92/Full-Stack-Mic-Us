export const addArtist = (artist) => {
    console.log(artist, "artists")
    return {
        type: 'ADD_ARTIST',
        value: artist
    }
}