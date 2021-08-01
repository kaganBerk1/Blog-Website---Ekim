import React from 'react'
import "./header.css"
import Line from "../../images/line.png"

export default function Header() {
    return (
        <div className="header">
              <div className="headerTitle"> 
                    <span className="headerTitleSm">
                        Bir Anı ve Düşünce Blogu
                    </span>
                    <span className="headerTitleM">
                        🎈
                    </span>
                    <span  className="headerTitleLg">
                        Ekim Merdivenleri
                    </span>
              </div>
              <img className="headerImage"
              src="https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="header Image">
              </img>
              <img src={Line} className="line" alt="line"></img>
        </div>
    )
}
