import React from "react"
import {Icon} from "semantic-ui-react"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                
                
                <AnchorLink href="#header" >
                <Icon 
                style={{
                    float : "right",
                    margin : 10,
                    padding : 10
                }} 
                size="huge" 
                name="arrow alternate circle up outline"
                />
                </AnchorLink>
                

            </div>
        )
    }
}