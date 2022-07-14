import React from 'react'
import { MovieList } from '../components'

export default function Movie({movielist,isLoading}) {
    return (
        <div>
          Movie List page
          <MovieList isLoading={isLoading} movielist={movielist} />
        </div>
    )
}
