import React from "react"
import ReactDOM from "react-dom"

export default function Info() {
    return (
        <div className="Container">
            <img className="main" src="./images/chris.png" width="40px" />
            <div className="info">
                <h1>Chris Viglietta</h1>
                <h2>Frontend Developer</h2>
                <h3>CSViglietta@gmail.com</h3>
            </div>
            <div className="buttonContainer">
                <button id="email">Email</button>
                <button id="linkedin">LinkedIn</button>
            </div>
        </div>
    )
}