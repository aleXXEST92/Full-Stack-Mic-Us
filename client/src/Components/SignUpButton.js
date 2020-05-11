import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import axios from "axios"

const renderArtist = () => {
    axios
        .get('http://localhost:5000/api/artists')
        .then(res => {   
        console.log(res.data)
        }
    )
  }


const SignUpButton = () => {
    return (
        <>
        <div className="signup-container">
             <h3 className="hidden">Become A Member</h3>
             <Link to="/sign-up">
                <Button className="signup-button">
                  <span>Sign Up!</span>
                </Button>   
            </Link> 

            <Button onClick={renderArtist()}>
                    get artists
                </Button>

        </div>
        </>
    )
}

export default SignUpButton;