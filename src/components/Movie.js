import React, { useEffect, useState } from 'react'
import "./Home.css"
import { useParams } from 'react-router-dom'
const Movie = () => {
    const [movie,setMovie]=useState({})
    let {id}=useParams()
    useEffect(()=>{
        let myMovie={
                id:1,
                title:"Hunger Games",
                release_date:"1986-03-07",
                runtime:116,
                mpaa_rating:"R",
                description:"Some long description"
            
        };
        setMovie(myMovie)
    },[id])
    
  return (
    <div>
        <h2>Movie:{movie.title}</h2>
        <small><em>{movie.release_date},Runtime:{movie.runtime},Rated:{movie.mpaa_rating}</em></small>
        <hr/>
        <p>{movie.description}</p>
    </div>
  )
}

export default Movie