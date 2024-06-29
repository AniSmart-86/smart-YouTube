import React from 'react'
import './Recommend.css'
import user from '../../assets/video-img.jpg'
import { API_KEY, converter } from '../../Api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'



const Recommend = ({categoryId}) => {

    const [recommendData, setRecommendData] = useState([]);

     console.log(recommendData)
    const fetchRecommendData = async () =>{
        const recommend_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=NG&videoCategoryId=${categoryId}&key=${API_KEY}`
        await fetch(recommend_url).then(response=>response.json()).then(data=>setRecommendData(data.items))

    }

    useEffect(()=>{
        fetchRecommendData()
    },[]);

  return (
    <div className='recommend'>
        {recommendData?.map((item, i)=>(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={i} className="side-video-list">
    <img src={item.snippet.thumbnails.medium.url} alt="" />
    <div className="videoInfo">
        <h4>{item.snippet.title}</h4>
        <p>{item.snippet.channelTitle}</p>
        <p>{converter(item.statistics.viewCount)} views</p>
    </div>
</Link>
    ))}


    </div>
  )
}

export default Recommend