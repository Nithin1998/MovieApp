import {createSelector} from "reselect";
import {Filter} from "./Filter";


const getsort = state => state.sort


export const Sort = createSelector(
    [Filter,getsort],
    (Filteredmovies,getsort) => {
        if(getsort){
    const sortedarray = [...Filteredmovies].sort((movie1,movie2)=>{
            if(movie1.Title>movie2.Title) return 1
            else return -1
        })
    return   getsort === "ASC"?sortedarray:sortedarray.reverse()
    }
    else{
        return Filteredmovies;
    }
    }
)