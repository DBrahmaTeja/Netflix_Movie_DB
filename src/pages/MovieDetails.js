import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import '../styles/movie-details.css'
import { Link } from 'react-router-dom';



export default function MovieDetails() {
    const [isLoading, setisLoading] = useState(true);
    const [moviedetails, setmoviedetails] = useState(null);
    const {id}=useParams();
   
   useEffect(() => {
    const fetchMovieDetails = async()=> {
        setisLoading(true);
        const res= await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=aa660442`)
        console.log(res.data);
        setmoviedetails(res.data);
        setisLoading(false);
       }
      fetchMovieDetails();
   }, [id])
   if(isLoading)
   {
    return (
        <div>
           <h1> Movie Details are being Loaded, Please Wait..;</h1>
        </div>
    )
   }
   else if(moviedetails)
   {
    return (
        <div className='movie-details'>
            <Link to={`/`}>
            <div className='exit'>
            <button
            >
                X</button>
            </div>
            </Link>
            <img className='poster' src={moviedetails.Poster} alt={moviedetails.Title}/>
           <h1><p>Title: {moviedetails.Title}</p></h1>
            <p>Year: {moviedetails.Year}</p>
            <p>Rated: {moviedetails.Rated}</p>
            <p>Released: {moviedetails.Released}</p>
            <p>Runtime: {moviedetails.Runtime}</p>
            <p>Genre:{moviedetails.Genre}</p>
            <p>Director:{moviedetails.Director}</p>
            <p>Writer:{moviedetails.Writer}</p>
            <p>Actors: {moviedetails.Actors}</p>
            <p>Plot: {moviedetails.Plot}</p>
            <p>Language:{moviedetails.Language}</p>
            <p>Country:{moviedetails.Country}</p>
            <p>Awards: {moviedetails.Awards}</p>
           
            <p>Metascore: {moviedetails.Metascore}</p>
            <p>IMDB Rating: {moviedetails.imdbRating}</p>
            <p>IMDB Votes: {moviedetails.imdbvotes}</p>
            <p>Type: {moviedetails.Type}</p>
            <p>DVD: {moviedetails.DVD}</p>
            <p>BoxOffice: {moviedetails.BoxOffice}</p>
            <p>Production: {moviedetails.Production}</p>
            <p>Website: {moviedetails.Website}</p>
            <p>Response: {moviedetails.Response}</p>
      </div>
    )
   }
   else
   return null;
}
