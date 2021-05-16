import React from "react"
import "../HomePage.css"
import {Link} from "react-router-dom"


const Navbar =()=>{
    return(
        <>
        <div className="nav">
        <div className="logo">

        <Link to="/" style={{textDecoration:"none", color:"#233E8B"}}>
        COVID-HelpView
        </Link>
        
        </div>
        <div className="contents">
            <div className="items">
            <Link to="chat" style={{textDecoration:"none", color:"#233E8B"}}>

            Chat
            </Link>
            
            </div>
            <div className="items">
            <Link to="beds" style={{textDecoration:"none", color:"#233E8B"}}>
            Bed Availability
            </Link>
           
            </div>
            <div className="items test">Take a test</div>
        </div>
        </div>
        
        </>
    )
}
export default Navbar;