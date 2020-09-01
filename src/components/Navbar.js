import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Redirect } from "react-router-dom";

import '../styles/navbar.css'

const Nav = ()=>{
    const [ redirect,changestate] = useState(false)
    const [moviename,changename]  = useState()
    const Searchmovie = (e)=>{
        if(e.key==='Enter'){
                changename(e.target.value)
                changestate(prevstate=>!prevstate)
        }}
    return(
        <div>
         
        {
        !redirect?<><ul  className="nav-bar">
       
            <input onKeyDown={Searchmovie} />
                <Link to="/"className="a">Home</Link>
                <Link to={"update/"}className="a">Add</Link>
                <a className="a" href="/logout">Logout</a>
            </ul>
            </>
            :<Redirect to={"/movie-info/"+moviename}/>
            
            }
 
        </div>
    )
}

export default Nav;