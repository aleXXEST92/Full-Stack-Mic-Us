import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Button } from 'react-bootstrap';
import { connect } from "react-redux"
import { addArtist } from "../redux/action"



class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      type: '',
      genre: '',
      artistArr: []
  }
  }

// componentDidMount() {
//   this.props.addArtist();
// }

artistName = event => {
  const newArtist = event.target.value;
  this.setState({name:newArtist})
}

artistEmail = event => {
  const newEmail = event.target.value;
  this.setState({email:newEmail})
}

artistChange = event => {
const newType = event.target.value;
this.setState({type:newType})
};

genreChange = event => {
const newGenre = event.target.value;
this.setState({genre:newGenre})
}

handleSubmit = (e) => {
  e.preventDefault()

  const addNewArtist = {
      name: this.state.name,
      email: this.state.email,
      type: this.state.type,
      genre: this.state.genre,
  }
  this.props.addArtist(addNewArtist)
}


render () {
return (
<>
  <div className="sign">
    <div className="signup__background-image"></div>
  </div>

    <div className="signup-container">
        <h2 className="signup-header">MicUS Sign Up</h2>

      <form className="signup-form" onSubmit={this.handleSubmit}>
        <TextField  id="outlined-basic" variant="outlined"
          className="style" 
          placeholder="Artist Name"
          onChange={this.artistName}
        />
      </form>

      <form >
        <TextField  id="outlined-basic"  variant="outlined"
          className="style" 
          placeholder="Email Address" 
          onChange={this.artistEmail}
        />
      </form>

        <div className="wrapper">
          <TextField
            id="outlined-select-currency"
            select
            label="Type Of Artist"
            onChange={this.artistChange}
            variant="outlined">
              <MenuItem value={1}>Band</MenuItem>
              <MenuItem value={2}>Solo</MenuItem>
              <MenuItem value={3}>DJ</MenuItem>
          </TextField>

          <TextField
            id="outlined-select-currency"
            select
            label="Genre Type"
            onChange={this.genreChange}
            variant="outlined">
              <MenuItem value={1}>Rock/Alternative</MenuItem>
              <MenuItem value={2}>Rap/Hip Hop</MenuItem>
              <MenuItem value={3}>Country/Folk</MenuItem>
              <MenuItem value={4}>Jazz/Classical</MenuItem>
          </TextField>
        </div>
    
      <Button onClick={this.handleSubmit} className="register-button">
        Register Now!
      </Button> 
  
  </div>
</>
    )
  }
}
  const mapStateToProps = state => ({
    artists: state.artists
})

export default connect(mapStateToProps, { addArtist })(SignUp)