import React from "react";
import Next from "./Next";
import Back from "./Back";
import '../styles/Next.css'
export default function Footer({setMovies, inputValue, page, setpage,homepage }) {
  return (
    <div className="btns">
      <div>
        <Next
         
          setMovies={setMovies}
          inputValue={inputValue}
          page={page}
          setpage={setpage}
          homepage={homepage}
        />
      </div>
      <div>
        <Back
        
          setMovies={setMovies}
          inputValue={inputValue}
          page={page}
          setpage={setpage}
          homepage={homepage}
        />
      </div>
    </div>
  );
}
