import { connect } from 'react-redux'
import SignUp from '../Components/SignUp'
import { addArtist } from '../redux/action'


const mapDispatchToProps = (dispatch) => {
    console.log("signUpContainer")
    return {
        addArtist: (index) => dispatch(addArtist(index))
    }
}

export default connect(null, mapDispatchToProps)(SignUp)