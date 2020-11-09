import React from "react"
import AboutPic from "./about-pic.svg"

export default class About extends React.Component {
    render() {
        return (
            <div className="aboutDiv">
                <h2 className="sectionHeader">ABOUT</h2>
                <p>
                    Hello Helpie sends quick and easy ways for you to help out 
                    causes that you care about  straight to your inbox every 
                    two weeks.
                </p>

                <img className="aboutPic" alt="email illustration" src={AboutPic}/>
                
            </div>
        )
    }
}