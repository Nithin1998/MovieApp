import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteMovies} from "../actions/action"
const MovieInfo = ({movies,moviedelete})=>{
    return (
        <div className="container">
                        <div className="movie-container">
                            <h3  className="movie-name"><Link  to={"/update/"+movies.id}>{movies.Title}</Link>
                            </h3>
                             <h3 >{movies.Genre}</h3>
                             <h3 className="rating" >{'*'.repeat(movies.Rating)}</h3>
                             <button onClick ={moviedelete}value={movies.id}className="delete">Delete</button>
                        </div>
                </div>
    )
}
 function matchdispatchtoprops(dispatch){
     return {
         moviedelete:async (e) => {
                dispatch(deleteMovies(e.target.value))
         }
     }
 }
export default connect(null,matchdispatchtoprops)(MovieInfo);