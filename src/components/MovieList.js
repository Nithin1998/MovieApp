import React from "react";
import MovieInfo from "./MovieInfo";
import {connect} from "react-redux";
import {Sort} from "./Sort";
import FilterSortComponent from "./FilterSortComponent";
const MovieList = ({movies,rating,sort}) => {
      return(
        <>
     <FilterSortComponent movies={movies} rating={rating}sort={sort} /> 
    <div className="container">
    <div className="movie-container heading">
              <h2>Movie</h2>
              <h2>Genre</h2>
              <h2>Rating</h2>
              </div>
    </div>
            <div>
               {
            movies.map(elem=>{
               return <MovieInfo key={elem.id}movies={elem} />
             
             })
          }
            </div>
            </>
        )
}
function mapStateToProps(state) {
  
      return {
        movies: Sort(state)
      }
  }
  function mapdispatchtoprops(dispatch)
  {
    return {
        rating: (e) => {
               dispatch({
                   type:"FILTER",
                   payload:{
                   description:Number(e.target.value)
                        }
                    })
                   },
        sort:(e)=>{
            dispatch({
                      type:"SORT",
                      payload:{
                        description:e.target.value
                      }
                    })
                  
        }
    }
  }
export default connect(mapStateToProps,mapdispatchtoprops)(MovieList);