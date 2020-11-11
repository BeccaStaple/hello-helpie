import React from "react"
import {Icon} from "semantic-ui-react"
import {goToTop} from "react-scrollable-anchor"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                
                
                
                <Icon 
                style={{
                    float : "right",
                    margin : 10,
                    padding : 10
                }} 
                size="huge" 
                name="arrow alternate circle up outline"
                onClick={goToTop}
                />

            </div>
        )
    }
}