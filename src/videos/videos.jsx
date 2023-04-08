import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadVideos } from "../store/videos";

let Videos = (props) => {
    let videosState = useSelector(state => state.videos);
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(
            loadVideos()
        )
    },[]);
    return(
        <div>
            {videosState}
        </div>
    )
}

export default Videos;