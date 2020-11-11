import React from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'


export default class PageNav extends React.Component {
    render() {
        return (
            <div className="pageNav">
                <AnchorLink className="pg-link" href="#about">About</AnchorLink>
                
                <AnchorLink className="pg-link" href="#helpexamples">How to Help</AnchorLink>
                
                <AnchorLink className="pg-link" href="#signup">Sign-Up</AnchorLink>
        
                <AnchorLink className="pg-link" href="#contribute">How you can help</AnchorLink>
            </div>
        )
    }
}