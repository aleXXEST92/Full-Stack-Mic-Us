import { connect } from 'react-redux'
import SignUp from '../Components/SignUp'
import { addArtist, getArtist } from '../redux/action'




const mapDispatchToProps = (dispatch) => {
    return {
        addArtist: (index) => dispatch(addArtist(index)),
        getArtist: () => dispatch (getArtist())
    }
}

export default connect(null, mapDispatchToProps)(SignUp)