import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'



const Navigation = () => {
    return (
        <>
        <div className="nav">
        <Navbar fixed="top">
            <Navbar.Brand href="#home">
                <h1><b>mic</b><i>US</i></h1>
            </Navbar.Brand>
            <div className="slide">Promote Yourself, and We Can Help!</div>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <ul className="list">
                            <li className="link"><Link to="/">Home</Link></li>                    
                            <li><Link to="/sign-up">Sign Up</Link></li>
                        </ul>
                    </Navbar.Collapse>
        </Navbar>
        </div>
       </> 
    )
}

export default Navigation;