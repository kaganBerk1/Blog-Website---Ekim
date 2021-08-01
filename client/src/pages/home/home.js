import React from 'react'
import "./home.css"
import Header from "../../components/header/header"
import Posts from "../../components/posts/posts"
export default function Home() {
    return (
        <div>
            <Header></Header>
            <Posts></Posts>
        </div>
    )
}
