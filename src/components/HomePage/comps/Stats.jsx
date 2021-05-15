import React from "react"

const Stats =()=>{
    return(
        <>
        <div className="container">
        <div className="background-stats">
            <div className="titler">Statistics</div>
            <div className="card">
            <div className="card-details">
                <div className="bed">
                    <div className="value">10</div>
                    <div className="name">beds</div>
                </div>
                <div className="bed">
                <div className="value">45</div>
                    <div className="name">Hospitals</div>
                </div>
                <div className="bed">
                <div className="value">1k+</div>
                    <div className="name">Doctors</div>
                </div>
                <div className="bed">
                <div className="value">30+</div>
                    <div className="name">Admitted</div>
                </div>
            </div>
         </div>
        </div>
      
        </div>
        </>
    )
}
export default Stats;