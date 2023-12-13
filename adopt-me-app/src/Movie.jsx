import React from 'react'

const Movie = (props) => {
    const {title, posterURL, id, imdbId} = props;


    return (
        <a href={`/details/${id}`} className='pet'>
            <div className='image-container'>
                <img src={posterURL} alt={title} />
            </div>
            <div className='info'>
                <h1>{title}</h1>
                <h2>ImdbID code: {imdbId}</h2>
            </div>
        </a>
    )
}

export default Movie