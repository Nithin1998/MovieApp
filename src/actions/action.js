import {postdata,getData} from "../apiCalls";


//action to be dispatched
const fetchMovies = () => {
    return async (dispatch,getState) => {
        try {
            dispatch({ type: "FETCH_MOVIES_INIT" });
            const movies = await getData()
            dispatch({ 
                type: "FETCH_MOVIES_SUCCESS",
                payload: {description:movies}
            });
        } catch(e) {
            dispatch({ type: "FETCH_MOVIES_FAILURE" });
        }
    }   
}
export const deleteMovies  = (id) => {
    return async (dispatch,getState) => {
        try{
            const ret =  await fetch(`http://localhost:8000/movies/${id}`,{
                method:"DELETE"
            })
            if(ret){dispatch({
                type:"DELETE",
                payload:{
                    description:id
                }
            })}
        }
        catch(e){
            dispatch({
                type:"DELETE_FAILURE"
            })
        }
            
    }
}
export const Updatemovies = (id=null,title,genre,rating) => {
    return async(dispatch,getState) => {
           let res =  await postdata(id,title,genre,rating);
           let data = await res.json();
          data?dispatch({
              type:"MOVIE_UPDATION",
              payload:{
                  description:{
                      id:data,
                      Title:title,
                      Rating:rating,
                      Genre:genre
                  }
              }
          }):dispatch({
              type:"MOVIE_UPDATION_FAILURE"
          })  

          return data
        }
        
    
}



export default fetchMovies;