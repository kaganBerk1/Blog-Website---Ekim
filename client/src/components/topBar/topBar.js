import React from 'react'
import "./topBar.css"
import logo from "../../images/logo.png"
export default function topBar(
    {
        isLogin=true
    }
) {
    return (
        <div className="cover">
            <div >
                <a href="/">
                    <img className="logo"  src={logo} alt="logo2"></img>
                </a>
            </div>
            <div className="center">
                <ul className="itemsCover">
                    <a href="/" className="navItems">
                        HOME 
                    </a>
                    <a href="/about"  className="navItems">
                        About Us
                    </a>
                    <a href="/allposts" className="navItems">
                        All posts
                    </a>
                    <a href="/contact" className="navItems">
                    Contact
                    </a>
                </ul>
            </div>
            <div className="right">
                <div className="searchIcon">
                        <i class="fas fa-search"></i>
                </div>
                {isLogin&&
                <a href="/login">
                    <img className="profileImage" src="https://images.pexels.com/photos/878784/pexels-photo-878784.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile photo"></img>
                </a>}
            </div>
        </div>
    )
}
