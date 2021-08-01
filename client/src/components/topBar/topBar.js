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
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="center">
                <ul className="itemsCover">
                    <li className="navItems">
                        HOME 
                        
                    </li>
                    <li  className="navItems">
                        About Us
                    </li>
                    <li className="navItems">
                        All posts
                    </li>
                    <li  className="navItems">
                    Contact
                    </li>
                </ul>
            </div>
            <div className="right">
                <div className="searchIcon">
                        <i class="fas fa-search"></i>
                </div>
                {isLogin&&<div>
                    <img className="profileImage" src="https://images.pexels.com/photos/878784/pexels-photo-878784.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile photo"></img>
                </div>}
            </div>
        </div>
    )
}
