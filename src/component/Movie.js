import React from "react";
const IMG_URL = 'https://image.tmdb.org/t/p/w1280'
function Movie({ movie }) {
    const setColor = (num)=>{
        if(num >= 8) {
        return 'red' 
    }else{ return ''}
   
    }
    return (
        <div class="card">
            <img className="image" src={IMG_URL + movie.poster_path} />
            <div className="info">
                <h1 className="name">{movie.name || movie.title}</h1>
                <span className="span">{movie.overview}</span>
            </div>

        </div>

    )
}
export default Movie