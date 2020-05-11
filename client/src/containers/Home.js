import { connect } from 'react-redux'
import Home from '../Components/Home'
import { getArtist } from '../redux/action'

const mapStateToProps = (state) => {
    return {
        artists: state.artist
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArtist: (index) => dispatch(getArtist(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)