import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../store/videos";
import { likeVideo } from "../store/likes";
import { SmallContainer } from "../theme";
import Video from "./Video";

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
            <SmallContainer>
                {
                    videosState.data.videos.map((video, index) =>(
                        <Video index={index} video={video}></Video>
                    ))
                }
            </SmallContainer>
        </div>
    )
}

export default Videos;