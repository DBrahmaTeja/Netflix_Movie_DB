import React, { useState } from "react";
import "../styles/Next.css";
import axios from "axios";

export default function Back({ setMovies, inputValue, page, setpage,homepage}) {
  const [isLoading, setisLoading] = useState(false);

 
  if (isLoading) {
    return <p>Previous Page is Loading Please Be Patient!!</p>;
  }
  if(homepage)
  {
    return " ";
  }
  const fetchurl = async () => {
    if (page !== 1) {
      setpage(page - 1);
      page = page - 1;
    }
    //https://www.omdbapi.com/?s=avatar&page=1&apikey=aa660442
    let response = await axios.get(
      "https://www.omdbapi.com/?s=" +
        inputValue +
        "&page=" +
        page +
        "&apikey=aa660442"
    );
    setisLoading(false);
    return response;
  };
  const searchback = async () => {
    let response2 = await fetchurl();
    setMovies(response2.data.Search);
  };

  return (
    <>
      <button
        className="back"
        onClick={() => {
          setisLoading(true);
          searchback();
        }}
      >
        {'<'}-Prev
      </button>
    </>
  );
}
