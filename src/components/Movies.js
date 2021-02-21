import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie =>
        <div>
          <h3>{movie.title} </h3>
          <p>Length: {movie.time} minutes</p>
          <ul>
            <li>{ movie.genres }</li>
          </ul>
        </div>
      )}
    </div>
  )
}
export default Movies;
  
// {/* Make sure not to use curly braces because Arrow Functions have an implicit return value. If you use curly braces with arrow function they will no longer have an implicit return value.  Also it will only work if you have one element.   */} 
