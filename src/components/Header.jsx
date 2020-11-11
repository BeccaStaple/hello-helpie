import React from "react"
import HeaderImg from "./header-pic.svg"

export default class Header extends React.Component {
    render() {
        return (
            <section id={"header"}>
                <div className="headerDiv">

                    <div className="headerTxt">
                        <h1 className="title">HELLO HELPIE</h1>
                        <p>Helping you help others</p>

                    </div>


                    <img alt="illustration of woman holding smiley face" className="headerImg" src={HeaderImg} />

                </div>

            </section>






        )
    }



}