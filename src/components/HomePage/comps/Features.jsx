import React from "react"
import {Link} from "react-router-dom"

import "../HomePage.css"
import Chat from "../../../images/Chat-icon.svg"
import Beds from "../../../images/Beds.svg"
import Test from "../../../images/Test.svg"


const Features =()=>{
    return(
        <>
        <div className="container">
        <div className="background-features">
            <div className="titler">Features</div>
            <div className="cards">
                <div className="cards-details">
                    <div className="img">

                        <img src={Chat} alt="" height="100px"/>
                    </div>
                    <div className="card-content">
                    <div className="inner-title">
                    <Link to="/chat" style={{textDecoration:"none", color:"#615AE1"}}> 
                    Chat
                    </Link>
                    </div>
                    <div className="inner-meta">
                    lorem ipusm
                    </div>
                   

                       
                    </div>
                </div>
                <div className="cards-details">
                    <div className="img">

                        <img src={Test} alt="" height="100px"/>
                    </div>
                    <div className="cards-content">
                        <div className="inner-title">
                            Test
                        </div>
                        <div className="inner-meta">
                            lorem ipsum
                        </div>

                    </div>
                </div>
                <div className="cards-details">
                    <div className="img">

                        <img src={Beds} alt="" height="100px"/>
                    </div>
                    <div className="card-content">
                        <div className="inner-title">
                            Beds
                        </div>
                        <div className="inner-meta">
                            lorem ipsum
                        </div>

                    </div>
                </div>
            </div>
            
            
        </div>
        </div>
        
        </>
    )
}
export default Features;