import React, { useState ,useEffect} from "react";
import {useParams} from "react-router-dom";
import Nav from "./Navbar"
import {getData} from '../apiCalls';
import '../styles/singlemovie.css';
import SingleMovieList from "./SingleMovieList";


const SingleMovie = () =>{
let {name}  = useParams();
let [movies,changeinfo] = useState({});
useEffect(()=>{
    getData(name)
     .then(data=>changeinfo(data))
    }
,[name])
    return (
        <div>
        <Nav/>
          {
           movies? <SingleMovieList movies={movies} id={movies.id}/>:<p>Not found!</p>
         }
         </div>
   
    )
}

export default SingleMovie;

