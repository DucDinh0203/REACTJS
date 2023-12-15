import React, { useEffect, useState } from 'react'
import Results from './Results';


const TYPEOFMOVIE = ["animation", "classic", "comedy", "drama", "horror", "family", "mystery", "western"]
const SearchTab = () => {
    const [movieName, setMovieName] = useState("");
    const [typeOfMovie, setTypeOfMovie] = useState("");
    const [movie, setMovie] = useState([]);

    useEffect(() => {
            requestMovie();
        // eslint-disable-next-line
    }, []);

    async function requestMovie() {
            const res = await fetch(
                `https://api.sampleapis.com/movies/${typeOfMovie}`
            );
            const json = await res.json();
            // console.log("Json: " + JSON.stringify(json));
            setMovie(json);
    };

    return (
        <div className="search-params">
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    if(typeOfMovie){
                        requestMovie();
                    }
                }}
            >
                <label htmlFor='movie'>
                    Movie
                    <input
                        id="movie"
                        value={movieName}
                        placeholder='Enter Movie Name'
                        onChange={(e) => setMovieName(e.target.value)}
                    />
                </label>

                <label htmlFor="type">
                    Type
                    <select
                        id="type"
                        value = {typeOfMovie}
                        onChange={(e) => setTypeOfMovie(e.target.value)}
                    >
                        <option/>
                        {TYPEOFMOVIE.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results movies={movie}/>
        </div>
    )
}

export default SearchTab