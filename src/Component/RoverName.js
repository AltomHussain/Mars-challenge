import React, {useState, useEffect} from 'react'

function RoverName() {
    // FSLh5F4DsqmqdSawycO8KH35KsVuLUBhKuHq3Qpg
    const [rover, setRover] = useState([])

 useEffect(()=>{
     fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=FSLh5F4DsqmqdSawycO8KH35KsVuLUBhKuHq3Qpg")
     .then(res => res.json())
     .then((data) =>{
        console.log(data)
        setRover(data.rovers)
     } 
     )
 }, [])


    return (
        <div>
            <ul>
           {rover.map((date)=>{
               return(
               <li>{date.landing_date}</li>
               )
           }) }
           </ul>
        </div>
    )
}

export default RoverName
