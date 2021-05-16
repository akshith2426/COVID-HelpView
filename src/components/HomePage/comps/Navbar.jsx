import React from "react"
import "../HomePage.css"
import {Link} from "react-router-dom"


const Navbar =()=>{
    return(
        <>
        <div className="nav">
        <div className="logo">

        <Link to="/" style={{textDecoration:"none", color:"#615AE1"}}>
        COVID-HelpView
        </Link>
        
        </div>
        <div className="contents">
            <div className="items">
            <Link to="chat" style={{textDecoration:"none"}}>

            Chat
            </Link>
            
            </div>
            <div className="items">Features</div>
            <div className="items test">Take a test</div>
        </div>
        </div>
        
        </>
    )
}
export default Navbar;