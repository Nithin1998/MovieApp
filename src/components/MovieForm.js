import React,{useState} from "react";
import Nav from "./Navbar"
import '../styles/update.css';
import {useParams} from "react-router-dom";
import {Updatemovies} from "../actions/action";
import {connect} from "react-redux";

const MovieForm = ({updatemovie})=>{
    const[label,changelabel] = useState()
    const [rating,changerating] = useState()
    const [genre,changegenre]  = useState()
    const [title,changetitle]  = useState()
    let {id} = useParams();
    async function update(){
        //Updation and post
      let data =  await updatemovie(id,title,genre,rating)
      data?changelabel("Saved!"):changelabel("Error!")
}

    return(
        <>
        <Nav/>
        <div className="update-form">
        <label>{label}</label>
        <input placeholder="New Title" type="text" required onChange={(e)=>changetitle(e.target.value)}/>
        <input placeholder="New Genre" type="text" required onChange={(e)=>changegenre(e.target.value)}/>
        <input type="number" required min="1"max="5"placeholder="Rating [1 -5]"onChange={(e)=>changerating(e.target.value)}/>
        <button onClick={update}>Save</button>
        </div>
</>
    )
}

const mapdispatchtoprops = (dispatch) => {
    return {updatemovie:async (id=null,title,genre,rating) => {
        try{
      let data = await dispatch(Updatemovies(id,title,genre,rating))
      return data
        }
        catch(e){
            return false
        }
    }
}
}



export default connect(null,mapdispatchtoprops)(MovieForm);