import { useState } from "react";

import "./App.css";
import { Navbar, Footer } from "./components";
import axios from "axios";
import Movie from "./pages/Movie";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
const API_BASE_URL = "https://www.omdbapi.com";

//&apikey=aa660442
function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [page, setpage] = useState(1);
  const [homepage, sethomepage] = useState(true)
  let response;
  const fetchurl = async () => {
    response = await axios.get(
      API_BASE_URL + "/?s=" + inputValue + "&page=" + page + "&apikey=aa660442"
    );

    return response;
  };

  const search = async (e) => {
    setisLoading(true);
    let response1 = await fetchurl();
    if(!response1)
    {
      console.log("no movies found")
    }
    setMovies(response1.data.Search);
    setisLoading(false);
    sethomepage(false);
  };
  return (
    <div className="main">
      <Navbar
        search={search}
        inputvalue={inputValue}
        setinputvalue={setinputValue}
      />

      <Router>
        <Routes>
          <Route
            path="/"
            element={<Movie isLoading={isLoading} movielist={movies} />}
          />
          <Route
            path="/movie-list/:id" //: before anything makes it as a variable in reactroutes
            element={<MovieDetails />}
          />

        </Routes>
      </Router>

      <Footer
        movies={movies}
        setMovies={setMovies}
        inputValue={inputValue}
        page={page}
        setpage={setpage}
        homepage={homepage}
        
      />
    </div>
  );
}

export default App;
