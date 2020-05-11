import { connect } from 'react-redux'
import Search from '../Components/Search'
// import { addArtist } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        artists: state.artist
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addArtist: (index) => dispatch(addArtist(index))
//     }
// }

export default connect(mapStateToProps)(Search)