import React, { useEffect } from 'react'
import "./Home.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Movies = () => {
  const [movies,setMovies]=useState([])
  useEffect(()=>{
    let moviesList=[
      {  id:1,
        title:"Hunger Games",
        release_date:"1986-03-07",
        runtime:116,
        mpaa_rating:"R",
        description:"Some long description"
      },
      { id:2,
        title:"Hunger Games 2",
        release_date:"1986-03-08",
        runtime:115,
        mpaa_rating:"PG-13",
        description:"Some long description"
      }  ];
    setMovies(moviesList)
  },[])
  return (
    <div >
        <h2>Movies</h2>
        <hr/>
        <table className='table table-striped table-hover'>
          <thead>
            <tr>
              <th>Movie</th>
              <th>Release Date</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((m)=>(
              <tr key={m.id}>
                <td>
                  <Link to = {`/movies/${m.id}`}>
                    {m.title}
                  </Link>
                </td>
                <td>{m.release_date}</td>
                <td>{m.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
export default Movies