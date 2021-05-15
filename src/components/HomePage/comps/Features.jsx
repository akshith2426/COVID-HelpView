import React from "react"
import {Link} from "react-router-dom"

const Features =()=>{
    return(
        <>
        <div className="container">
        <div className="background-features">
            <div className="titler">Features</div>
            <div className="cards">
                <div className="cards-details">
                    <div className="img">
                        <img src="" alt=""/>
                    </div>
                    <div className="card-content">
                    <Link to="/chat">
                    Chat
                    </Link>
                       
                    </div>
                </div>
                <div className="cards-details">
                    <div className="img">
                        <img src="" alt=""/>
                    </div>
                    <div className="cards-content">
                        test
                    </div>
                </div>
                <div className="cards-details">
                    <div className="img">
                        <img src="" alt=""/>
                    </div>
                    <div className="card-content">
                        beds
                    </div>
                </div>
            </div>
            
            
        </div>
        </div>
        
        </>
    )
}
export default Features;