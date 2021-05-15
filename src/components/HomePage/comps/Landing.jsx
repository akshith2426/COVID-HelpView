import React from "react"
import "../HomePage.css"
import background from "../../../images/Landing.svg"
import phone from "../../../images/Phone.svg"
import {Link} from "react-router-dom"
const Landing =()=>{
    return(
        <>
        <div className="landing" style={{backgroundImage:background}}>
        <div className="main-land">
           <div className="titles details"> Find a Bed</div>
           <div className="meta details"> lorem ipsum is the most wonderful place in the world
           lorem ipsum is the most wonderful place in the world
           lorem ipsum is the most wonderful place in the world
           </div>
            <div className="btn details">
                <Link to="/chat" style={{ textDecoration: 'none',color:"white" }}>
                Take a test
                </Link>
                
            </div>
        </div>
        <div className="phone-img">
            <img src={phone} alt=""/>
        </div>
        
        </div>
       
        </>
    )
}
export default Landing;
