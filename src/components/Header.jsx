import React from "react"
import HeaderImg from "./header-pic.svg"
import { Grid, Image } from "semantic-ui-react"

export default class Header extends React.Component {
    render() {
        return (

            <div className="headerDiv">

                <div className="headerTxt">
                <h1>HELLO HELPIE</h1>
                <p>Helping you help others</p>

                </div>
               

                <img className="headerImg" src={HeaderImg} />

            </div>




        )
    }



}