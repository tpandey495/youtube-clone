import React, {useState,useEffect } from 'react';
import {YT_URL} from "../../utils/constant";
import VideoCard, { AdVideoCard }  from './VideoCard';
import {Link} from 'react-router-dom';

 const VideoContainer=()=>{
  const[videos,setVideos]=useState([]);

    useEffect(() => {
        getVideos();
      }, []);
    
      const getVideos = async () => {
        const data = await fetch(YT_URL);
        const json = await data.json();
        console.log(json);
        setVideos(json.items);
      };

    return (
      <div className="flex flex-wrap">
       {videos[0]&&<AdVideoCard info={videos[0]}/>}
        {
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))
        }
    </div>
  )
}

export default VideoContainer;