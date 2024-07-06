import React, { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import { imageUrl } from '../../constants/constants'
import './search.css'

function Search() {
  const {searchResult} = useContext(SearchContext)
  return (
    <div className='search-result'>
      {
        searchResult.length > 0 &&
        searchResult.map((obj)=>{
          return(
            obj.backdrop_path &&
            <div className='search-img-div'>
              <p>{obj.original_title}</p>
              <img src={imageUrl+obj.backdrop_path} className='search-img' alt='Movie' />
            </div>
          )
        }) 
      }      
    </div>
  )
}

export default Search