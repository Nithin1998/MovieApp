import React,{useEffect} from 'react';
import Nav from './Navbar'
import MovieList from "./MovieList"
import {connect} from "react-redux";
import fetchMovies from '../actions/action.js';

const  Home = ({fetchalldispatch}) =>{

useEffect(()=>{
    fetchalldispatch();
})


return (
  <>
      <Nav/>  
      
    <MovieList />
    </>
  );
}

function mapdispatchtoprops(dispatch)
{
    return {
    fetchalldispatch:()=>{
     return  dispatch(fetchMovies())
    },
    
}
}
export default connect(null,mapdispatchtoprops)(Home);

