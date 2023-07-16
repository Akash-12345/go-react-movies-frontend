import React from 'react'
import Ticket from "./../images/movies.jpg"
import { Link } from 'react-router-dom'
import "./Home.css"
const Home = () => {
  return (
    <div className="text-center">
        <h2>Find a movie to watch</h2>
        <hr/>
        <Link to ="/movies">
        <img src={Ticket} alt="movie tickets" className='img'></img>
        </Link>
    </div>
  )
}

export default Home