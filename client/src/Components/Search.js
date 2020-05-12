import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import axios from "axios"

const renderArtist = () => {
    axios
        .get('/api/artists')
        .then(res => {   
        console.log(res.data)
        }
    )
  }

const Search = (props) => {
  // console.log(props)

    return (
        <div className="search">
        <h2>Discover Independent <br/>Artists Here.</h2>
        <p>Support your local friends by streaming, <br/>
          following, sharing, and liking their art.</p>
        <Form className="searchbar">
        <FormControl type="text" placeholder="Artist Name or Genre.." className="mr-sm-2" /> 
        <Button onClick={renderArtist()}>
            Search
        </Button>
        </Form>  
      </div>
    )
}

export default Search;