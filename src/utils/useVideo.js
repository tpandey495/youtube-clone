import {useState,useEffect} from 'react';
import {API_KEY} from './constant';

export const useVideo=(videoid)=>{
      const [video,setVideo]=useState([]);
      useEffect(()=>{
        getVideos();
      },[])
    async function getVideos(){
        const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoid}&key=${API_KEY}`);
        const json = await data.json();
        console.log(json)
        setVideo(json?.items);
    }
 return video;
}


