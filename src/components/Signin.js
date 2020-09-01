import React from "react";
import '../styles/signin.css';

const Signin = () => {
    return(
        <div className="auth">
            <img className="logo" alt = "img"src="https://image.flaticon.com/icons/png/512/25/25231.png"></img>
           <button className="auth-link"><a href="http://localhost:8000/login">Github Login</a></button> 
        </div>
    )
}

export default Signin;