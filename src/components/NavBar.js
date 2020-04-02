import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component {

    render() {
        return (
            <div className="navbar" >
                <div className="dropdown">
                    <button style={{ boxShadow: "none" }} className="dropbtn">Projects
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/memes-vs-gifs">Memes vs Gifs</Link>
                        <Link to="/mealzys">Mealzys</Link>
                        <Link to="/buy-where">Buy / Where</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button style={{ boxShadow: "none" }} className="dropbtn">Social
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link to="/github">Github</Link>
                        <Link to="/linkedin">LinkedIn</Link>
                        <Link to="/triplebyte">Triplebyte</Link>
                    </div>
                </div>
                <Link to="/about">About Me</Link>
                <Link to="/goals">Dream Job</Link>
                <Link to="/interests">Interests</Link>
            </div >
        )
    }
}

export default NavBar