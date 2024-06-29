import React, { useEffect, useState } from 'react'
import './Feed.css'
import user from '../../assets/video-img.jpg'
import { Link } from 'react-router-dom'
import { API_KEY, converter } from '../../Api'
import moment from 'moment/moment'

const Feed = ({category}) => {

    const [data, setData] = useState([]);

    // console.log(data)
    const fetchData = async () =>{
        const video_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=NG&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(video_url).then(response=>response.json()).then(data=>setData(data.items))

    }


    useEffect(()=>{
        fetchData()
    },[category]);

  return (
    <div className="feed">

{data.map((item, i)=> (
            <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card' key={i}>
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
    ))}

  
    
    </div>

  )
}

export default Feed