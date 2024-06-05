import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import WatchList from "./components/WatchList";
import WatchedList from "./components/WatchedList";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/NavBar";
import "./App.css";

const API_KEY = process.env.React_App_MOVIE_API_KEY;
const API_URL = process.env.React_App_MOVIE_API_BASE_URL;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [watchedList, setWatchedList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await fetch(`${API_URL}/popular?api_key=${API_KEY}&language=en-US&page=1`);
        // const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7dff8e7516b05a4328e4c3d22465229b&language=en-US&page=1`);
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(movies);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const addToWatchList = (movie) => {
    const isDuplicate = watchList.some((item) => item.id === movie.id);
    if(!isDuplicate) {
      setWatchList([...watchList, movie]);
    } else {
      alert("this movie is already in the watch list");
    }    
  };

  console.log(watchList);

  const addToWatchedList = (movie) => {
    // Handle add movie from watch list to watched list
    const isDuplicate = watchedList.some((item) => item.id === movie.id);
    if (!isDuplicate) {
      setWatchedList([...watchedList, movie]);
      setWatchList(watchList.filter((m) => m.id !== movie.id));
    } else {
      console.log("This movie is already in the watch list");
    }
  };

  const handleSearch = (query) => {
    // Handle search function here
  };

  return (
    <Router>
      <div className="App">
        <NavBar onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={filteredMovies}
                watchList={watchList}
                watchedList={watchedList}
                addToWatchList={addToWatchList}
                addToWatchedList={addToWatchedList}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <WatchList
                movies={watchList}
                addToWatchedList={addToWatchedList}
              />
            }
          />
          <Route
            path="/watchedlist"
            element={<WatchedList movies={watchedList} />}
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
