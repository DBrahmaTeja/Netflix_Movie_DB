import React from "react";
import '../styles/navbar.css'

export default function Navbar({setinputvalue, inputvalue,search}) {
   // console.log(inputvalue);
    
  return (
    
    <div className="navbar">
      
      <span className="heading"  >MOVIE DB</span>
      <div>
      <input 
      
      onChange={(e)=>{
        setinputvalue(e.target.value);
       
      }}
      onKeyPress={event => {
        if (event.key === 'Enter') {
          search()
        }
      }}
      type='text' 
      placeholder="Enter a Movie!!"
      
       className="search-bar" />
       <button className="searchbtn" onClick={search}>Search</button>
       </div>
    </div>
  );
}
