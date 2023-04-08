import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../store/videos";
import Player from "./Player";
import { likeVideo } from "../store/likes";

let Videos = (props) => {
    let videosState = useSelector(state => state.videos);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(
            loadVideos()
        )
    },[]);

    let doLike = (videoId) => {
        dispatch(
            likeVideo(videoId)
        )
    }
    return(
        <div>
            {
                videosState.data.videos.map((video, index) =>(
                    <div key={index}>
                        <h2>{video.title}</h2>
                        <Player video={video}></Player>
                        <button onClick={() => doLike(video.id) } style={{ backgroundColor:(video.isLikedByCurrentUser ? 'red' : 'inherit') }}>like</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Videos;