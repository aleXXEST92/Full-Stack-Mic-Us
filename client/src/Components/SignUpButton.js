import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'


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
        </div>
        </>
    )
}

export default SignUpButton;