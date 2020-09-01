
const FETCH_MOVIES_INIT = 'FETCH_MOVIES_INIT';
const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
const FILTER = 'FILTER';
const SORT = 'SORT';
const DELETE = "DELETE";
const DELETE_FAILURE = "DELETE_FAILURE";
const MOVIE_UPDATION  = "MOVIE_UPDATION";
const MOVIE_UPDATION_FAILURE = "MOVIE_UPDATION_FAILURE";
const initialstate = {
   movies:{
       entities:{

       }
   },
   ids:[],
   loading:false,
   filter:false,
   sort:false,
}
let obj = {}
let arr=[]
function reducer(state=initialstate,action)
{
    switch(action.type){
        case FETCH_MOVIES_INIT:
            return {
                ...state,
                loading:true,
            }
        case FETCH_MOVIES_SUCCESS :
            action.payload.description.forEach(elem=>{
                  obj[elem.id] = elem
                  arr.push(elem.id)
            })
            return {
                    ...state,
                    movies:{
                        entities:{
                            ...state.movies.entities,
                            ...obj
                        }
                    },
                    loading:false,
                    sort:false,
                    filter:false,
                    ids:arr
            }
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                loadin:false,
                filter:false,
                sort:false
            }
        case  FILTER:
            return {
                ...state,
                filter:action.payload.description,
            }  
        case SORT:
            return {
                ...state,
                sort:action.payload.description,
            }  
        case MOVIE_UPDATION:
            let updatedobj = {...state.movies.entities}
            updatedobj[action.payload.description.id]=action.payload.description
            return{
                ...state,
                movies:{
                   entities:{...updatedobj}
                }
            }    
        case MOVIE_UPDATION_FAILURE:
            return state
               
        case DELETE:
           let newobj = {...state.movies.entities}
           delete newobj[action.payload.description]
            return {
                ...state,
               movies:{
                   entities:newobj
               },
              ids:state.ids.filter(id => id!==action.payload.description)
            }  
         
        case DELETE_FAILURE:
            return state 
        default:
            return state    
    }
}

export default reducer;