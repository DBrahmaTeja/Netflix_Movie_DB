import React from 'react'
import '../styles/movie-list.css'
import MovieCard from './MovieCard'

export default function MovieList({movielist,isLoading}) {

    if(isLoading)
    {
        return "Loading Movies Please Wait"
    }
    else
    return (
        <div className='movie-list'>
            {/*Loop over all movies*/}
            {movielist.map((movie)=>
               ( <MovieCard movie={movie} key={movie.imdbID}/>)
            )}
            </div>
        
            
   )
}
