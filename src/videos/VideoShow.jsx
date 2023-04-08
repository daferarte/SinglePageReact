import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';
import Player from "./Player";
import { useDispatch, useSelector } from "react-redux";
import { getVideo } from "../store/videos";

let VideoShow = (props) =>{
    let {id} = useParams();
    let dispatch = useDispatch();
    let video = useSelector(state=>state.videos.currentVideo);

    useEffect(()=>{
        dispatch(
            getVideo(id)
        )
    },[])
    return(
        <div>
            {
                video && 
                <>
                    <h2>{video.title}</h2>
                    <Player video={video}></Player>
                </>
                
            }
        </div>
    )
}

export default VideoShow;