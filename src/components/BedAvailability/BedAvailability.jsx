import React,{useEffect,useState} from "react"
import axios from "axios"
import "../HomePage/HomePage.css"
import Navbar from "../HomePage/comps/Navbar"
import Time from "../../images/time.svg"
import Phone from "../../images/Phone-call.svg"


 const BedAvailability=()=>{
   
    const [data,setData]=useState([])
    const [limit,setLimit]=useState(20)
    const [query,setQuery]=useState("")
    
    useEffect(()=>{
        getData() 
    },[])
    async function getData(){
        await  axios("https://covidtelangana.com/data/covidtelangana.com/bed_data.json")
        .then(response=>{
            setData(response.data)
        })
        .catch(e=>{
            console.error(e)
        })
        
    }
    const  loadMore=()=>{
        setLimit(limit+20)
    }
    const handleChange=(e)=>{
     setQuery(e)
    }
    const SearchResult=(q)=>{
        let results = []
        data.map((value)=>
        !(value.hospital_name.toLowerCase()).includes(q) ? console.log("no") : results.push(value)
        )
        
        setData(results)
        results=[]

    }
   const SearchValue=(event)=>{
      
       SearchResult(query)
   }
        return(
            <>
             {/* <ul>
               {data.map(d=>(
                <li key={d.id}>
                    {d.hospital_name}
                </li>
               ))}
                   
               </ul> */}

               <Navbar/>
               <div className="banner">
                   <div className="banner-title">Find Beds</div>
                   <div className="banner-meta">lorem ipsum lorem ipsum</div>
                   {/* <form onSubmit={onFormSubmit}> */}
                   <input type="text" onChange={(e)=>handleChange(e.target.value)} className="banner-search" placeholder="Search for different Hospitals"  />
                       
                   {/* </form> */}
                   <button className="banner-btn" onClick={SearchValue}>Search</button> 
               </div>

                <div className="total-data">
                {/* .slice(0,limit? limit : data.length) */}
               
               <div className="hospital-cards">

               {
                   
                   data.slice(0,limit? limit : data.length).map(d=>(
                <div className="h-card">
                     <div className="update">
                       <div className="update-img  u-details"> <img src={Time} alt="" /> </div>
                       <div className="update-time u-details">2 hours ago</div>
                    </div>
                       <div className="h-title"> {d.hospital_name} </div>
                       <div className="tags">
                           <div className="district">{d.district}</div>
                           <div className="phone">
                               <div > <img src={Phone} alt="" /> </div>
                               <div className="phone-no">{d.hospital_phone}</div>
                           </div>


                       </div>
                       <div className="data">
                       <div className="data-row">
                       <div className="without-oxy w-cards">
                           <div className="without-data">
                               <span className="without-oxy-data"> {d.available_beds_without_oxygen} </span>
                               <span className="without-oxy-total">/ {d.total_beds_without_oxygen}</span>
                           </div>
                           <div className="without-oxy data-title">Without Oxygen</div>
                              
                        </div>

                           <div className="with-oxy w-cards">
                           <div className="with-data">
                               <span className="with-oxy-data"> {d.available_beds_with_oxygen} </span>
                               <span className="with-oxy-total">/ {d.total_beds_with_oxygen} </span>
                           </div>
                           <div className="with-oxy data-title">With Oxygen</div>
                              
                           </div>
                       </div>
                           
                            <div className="data-row">
                            <div className="with-oxy w-cards">
                              <div className="with-data">
                               <span className="with-oxy-data"> {d.available_icu_beds_with_ventilator} </span>
                               <span className="with-oxy-total">/ {d.total_icu_beds_with_ventilator} </span>
                              </div>
                              <div className="with-oxy data-title">ICU with Ventilator</div>
                              
                              </div>

                             <div className="with-oxy w-cards">
                                    <div className="with-data">
                                        <span className="with-oxy-data"> {d.available_icu_beds_without_ventilator} </span>
                                         <span className="with-oxy-total">/ {d.total_icu_beds_without_ventilator} </span>
                                    </div>
                                    <div className="with-oxy data-title">ICU without Ventilator</div>
                              
                             </div>
                            </div>
                           


                       </div>
                   </div>
               ))
                
               }
              
                 
               </div>
               {
                   data.length>20 &&
                <div className="banner-btn load" onClick={loadMore}>Load More</div>
               }
              
               </div>
            </>
        )
    
}
    

   

export default BedAvailability;
