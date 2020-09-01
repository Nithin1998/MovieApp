import React from "react";
import LandingPage from "./LandingPage"
import MovieForm from "./MovieForm";
import store from "../store";
import SingleMovie from "./SingleMovie";
import { Provider } from 'react-redux';
import Signin from "./Signin";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const  App = () => {
  return(
    <Provider store={store}>
         <Router>
             <Route exact path="/" component={ LandingPage}></Route>
             <Route exact path ="/signin" component={Signin} />
             <Route path="/movie-info/:name?" component={SingleMovie}></Route>
             <Route path="/update/:id?" component={MovieForm}></Route>
             <Route path="/logout" component={Signin}></Route>
         </Router>
  </Provider>
  )
}

export default App;