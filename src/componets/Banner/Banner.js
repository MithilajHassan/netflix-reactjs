import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../constants/constants'
export default function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`).then((response)=>{
      setMovie(response.data.results[0])
    }).catch(err=>console.log('Network_Error!!'))
  }, [])
  
  return (
    <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='banner-content'>
            <h1 className='banner-movie-title'>{movie ? movie.title:""}</h1>
            <div className='banner-buttons-div'>
                <button className='banner-button'>Play</button>
                <button className='banner-button'>My list</button>
            </div>
            <h1 className='banner-description'>{movie ? movie.overview:""}</h1>
        </div>
        <div className="banner-fade"></div>
    </div>
  )
}
