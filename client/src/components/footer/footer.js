import React from 'react'
import "./footer.css"
import logo from "../../images/logo2.png"
export default function footer() {
    return (
        <div className="footer">
            <img src={logo} className="logo" alt="logo"></img>
            <div className="icons">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
            </div>
        </div>
    )
}
