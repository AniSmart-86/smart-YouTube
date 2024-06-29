import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import likeIcon from '../../assets/like-icon.png'
import dilikeIcon from '../../assets/dislike-icon.png'
import saveIcon from '../../assets/save-icon.png'
import shareIcon from '../../assets/share-icon.png'
import user from '../../assets/nazzy.jpg'
import video2 from '../../assets/video1.mp4'
import { API_KEY, converter } from '../../Api'
import moment from 'moment/moment'
import { useParams } from 'react-router'

const PlayVideo = () => {

    const {videoId} = useParams();

    const [apiData, setApiData] = useState(null);
    const [comments, setComments] =useState([]);
    // console.log(comments)

    const fetchVideoData = async () =>{

        const videoDetails = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails).then(res=>res.json()).then(data =>setApiData(data.items[0]));

    }
    

    const fetchCommentData = async() =>{
        const comments_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
        await fetch(comments_url).then(res=>res.json()).then(data =>setComments(data.items))
    }


    useEffect(()=>{
        fetchVideoData();
        
            },[videoId]);


    useEffect(()=>{
fetchCommentData();

    },[apiData]);

  return (
    <div className='play-video'>
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?apiData.snippet.title:"title here"}</h3>
        <div className="video-info">
            <p>{apiData?converter(apiData.statistics.viewCount):"123k"} views &bull; {moment(apiData?apiData.snippet.publishedAt:"2 days ago").fromNow()}</p>
            <div>
                <span><img src={likeIcon} alt="" />125</span>
                <span><img src={dilikeIcon} alt="" />2</span>
                <span><img src={shareIcon} alt="" />Share</span>
                <span><img src={saveIcon} alt="" />Save</span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={apiData?.snippet.thumbnails.medium.url} alt="" />
            <div>
                <p>{apiData?.snippet.channelTitle}</p>
                <span>1m subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>{apiData?.snippet.description}</p>
            <p>Subscribe to watch more videos</p>
            <hr />
            <h4>{converter(apiData?.statistics.commentCount)} Comments</h4>

            {comments.map((item, i) =>(

<div className="comment">
<img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
<div>
    <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.publishedAt).fromNow()}</span></h3>
    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>

    <div className="comment-action">
        <img src={likeIcon} alt="" />
        <span>244</span>
        <img src={dilikeIcon} alt="" />
    </div>
</div>
</div>

            ))}
           
           
        </div>
    </div>
  )
}

export default PlayVideo