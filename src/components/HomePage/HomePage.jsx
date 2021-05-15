import React from "react"

import Landing from "./comps/Landing"
import Navbar from "./comps/Navbar"
import Features from "./comps/Features"
// import Team from "./comps/Team"
import Stats from "./comps/Stats"
const HomePage=() => {
return(
    < >
    <div className="container">
    <Navbar />
   <Landing />
   </div>
   <Stats/>
   <Features />
   {/* <Team/> */}
    
  
    </>
)
} 
export default HomePage;