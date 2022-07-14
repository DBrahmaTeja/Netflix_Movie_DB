
import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/movie-card.css'
export default function MovieCard({movie}) {
  
    return (
        <div className='movie-card'>
            
        <Link to={`/movie-list/${movie.imdbID}`}>
            <img  className='movieimg' src={movie.Poster} alt={movie.Title}/>
            </Link>
                <div>{movie.Title}</div>
               
                <p>Year: {movie.Year}</p>
        </div>
        
    )
}
