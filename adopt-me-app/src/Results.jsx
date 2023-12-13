import React from 'react'
import Movie from './Movie'

const Results = ({movies}) => {
    return (
        <div className="search">
            {/* {movies.map((m) =>(
                <Movie 
                    title={m.title} 
                    id={m.id}
                    imdbId={m.imdbId} 
                    key={m.key}                
                />
            ))} */}

            {!movies.length ? (
                <h1>No Movie Found</h1>
            ) : (
                movies.map((m) => {
                    return (
                        <Movie
                            title={m.title}
                            id={m.id}
                            key={m.id}
                            imdbId={m.imdbId}
                            posterURL={m.posterURL}
                        />
                    );
                })
            )}
        </div>
    )
}

export default Results;