import React from 'react';
import MovieList from './MovieList';

const Home = ({ movies, watchList, watchedList, addToWatchList, addToWatchedList }) => {
  // console.log('Movies from home', movies.results);
  return (
    <div className="home">
      <MovieList title="Movie" movies={movies} onAddToWatchList={addToWatchList} />
      <MovieList title="Watch List" movies={watchList} onAddToWatchedList={addToWatchedList} />
      <MovieList title="Watched List" movies={watchedList} />
    </div>
  );
};

export default Home;
