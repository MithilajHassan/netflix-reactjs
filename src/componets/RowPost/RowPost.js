import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import YouTube from 'react-youtube'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'

export default function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [videoId,setVideoId] = useState('')
  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setMovies(response.data.results)
    }).catch(err=>alert('Network_Error!!'))
  }, [props.url])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    }
  }
  const handleMovie = (id)=>{
      axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        if(response.data.results.length !== 0){
          setVideoId(response.data.results[0])
        }
      }).catch(err=>alert('NetWork_Error'+err))
  }

  return (
    <div className='row-movies-div'>
        <h2 className='row-movies-title'>{props.title}</h2>
        <div className="row-movies">
          {movies.map((obj)=>{
            return(
              <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'small-row-movie-img':'row-movie-img'} key={obj.id} src={`${imageUrl+obj.backdrop_path}`} alt="movie poster" />
            )
          })}
        </div>
        {videoId && <YouTube videoId={videoId.key} opts={opts} /> }
    </div>
  )
}
