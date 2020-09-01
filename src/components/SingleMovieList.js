import React from "react";
import {Link} from "react-router-dom";


const SingleMovieList = ({movies,moviedelete}) => {
    return(
    <div className="container">
                        <div className="single-movie-container">
                            <h3  className="single-movie-name"><Link  to={"/update/"+movies.id}>  {movies.Title}</Link>
                            </h3>
                             <h3 >{movies.Genre}</h3>
                             <h3 className="rating" > {'*'.repeat(movies.Rating)}</h3>
                        </div>
                </div>
    )
}

export default SingleMovieList;