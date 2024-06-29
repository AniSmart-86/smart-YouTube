import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommend from '../../Components/Recommened/Recommend'
import { useParams } from 'react-router'

const Video = () => {

  const {videoId, categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommend categoryId={categoryId}/>
    </div>
  )
}

export default Video