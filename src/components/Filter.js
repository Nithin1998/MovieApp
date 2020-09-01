import {createSelector} from "reselect";

export function ConverttoArray(movies){
    let arr = []
    for(let keys in movies){
          arr.push(movies[keys])
    }
    return arr;
  }

const movies  = state => state.movies.entities;
const getfilter = state => state.filter;



export const Filter = createSelector(
    [movies,getfilter],
    (movies,getfilter) => {
      let moviearray = ConverttoArray(movies)
      if(getfilter){
        moviearray =  moviearray.filter((elem) => elem.Rating===getfilter)
           }
      return moviearray;
  }
  )
  