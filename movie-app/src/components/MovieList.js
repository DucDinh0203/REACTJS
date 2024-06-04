import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies, onAddToWatchList, onAddToWatchedList }) => {
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
  
  return (
    <div className="movie-list">
      <h2>{title}</h2>
      <div className="movie-items">
        {movies.map(movie => (
          <div className="movie-item" key={movie.id}>
            {/* Todo: Display the movie poster */}
            <div className="movie-details">
              {/* Todo: Display the movie title */}
              
              {/* Todo: Display more movie details if needed */}
            </div>
            <div className="movie-actions">
              {/* Todo: Add functionality to add movie to watch list */}
              
              {/* Todo: Add functionality to mark movie as watched */}
              
              {/* Todo: Link to the movie details page */}
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
