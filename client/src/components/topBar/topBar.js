import React from 'react'
import "./topBar.css"
import logo from "../../images/logo.png"
export default function topBar() {
    return (
        <div className="cover">
            <div >
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="center">
                <ul className="center">
                    <li>
                        HOME 
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        All posts
                    </li>
                    <li>
                    Contact
                    </li>
                </ul>
            </div>
            <div className="right">
                <div>
                    photo
                </div>
                <div>
                    search
                </div>
            </div>
        </div>
    )
}
