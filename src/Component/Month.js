import React from 'react'
import "./Month.css"
function Month() {
    const arrayOfMonth = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Des"
       
]
let arrayOfYears =[
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018"

  ]
    return (
   <div>        
       <ul className="month-container">
         {arrayOfMonth.map((month, index)=>{
                  return(
                 <li className="month" key={index}>{month}</li>
                                )
                     })}
              </ul>         
                 <ul className="year-container">
                      
                {arrayOfYears.map((year, index)=>{
                      return(
                      <li key={index} className="year">
                       {year}</li>
                      ) 
                    })} 
                    </ul>
                    
                    <ul className="year-container2">
                      
                      {arrayOfYears.map((year, index)=>{
                            return(
                            <li key={index} className="year2">
                             {year}</li>
                            ) 
                          })} 
                          </ul>
         </div>
 
  

     
    )
}

export default Month
