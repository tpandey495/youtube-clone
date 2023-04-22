import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { useVideo } from '../utils/useVideo';

const  Watch=()=>{
  const Dispatch=useDispatch();
   const [params]=useSearchParams();
   const videoid=params.get("v");

   useEffect(()=>{
    Dispatch(closeMenu());
   },[])

   const videos=useVideo(videoid);

   if (!videos) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${videoid}`;

   return (
      <div>
        <h2>{videos?.snippet?.title}</h2> 
         {/* <p>{videos?.snippet?.description}</p> */}
        <iframe title={videos?.snippet?.title} width="640" height="360" src={videoSrc} allowFullScreen></iframe>
      </div>
    );
  
}

export default Watch;