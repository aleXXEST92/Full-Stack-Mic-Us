import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      type: '',
      genre: ''
  }
  }

componentDidMount() {
  this.props.addArtist();
}

artistName = event => {
  const newArtist = (event.target.value);
  this.setState({name:newArtist})
}

artistEmail = event => {
  const newEmail = (event.target.value);
  this.setState({email:newEmail})
}

artistChange = event => {
const newType = (event.target.value);
this.setState({type:newType})
console.log(newType)
};

genreChange = event => {
const newGenre = (event.target.value);
this.setState({genre:newGenre})
}

handleSubmit = () => {
  this.props.addArtist(this.state)
}


render () {
return (
<>
  <div class="sign">
    <div class="signup__background-image"></div>
  </div>

    <div className="signup-container">
        <h2 className="signup-header">MicUS Sign Up</h2>

    <Form className="signup-form">
      <Form.Group>
        <Form.Control 
        className="style" 
        placeholder="Artist Name"
        onChange={this.artistName} />

        <Form.Control 
        className="style" 
        placeholder="Email Address" 
        onChange={this.artistEmail}/>

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
      </Form.Group>
    </Form> 

    <Link>
      <Button onClick={() => {this.handleSubmit(this.state)}} className="register-button">
        <span>Register Now!</span>
      </Button>     
    </Link> 
      
  </div>
</>
    )
  }
}
export default SignUp;