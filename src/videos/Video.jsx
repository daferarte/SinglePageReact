import React from "react";
import Player from "./Player";
import styled from "styled-components";

let VideoContainer = styled.div`
    position: relative;
    padding-bottom:177%
    margin-bottom: ${({theme})=>theme.dims.margin.normal};
    background-color: ${({theme})=>theme.colors.black};
    & iframe{
        z-index:1;
    }
    & .info{
        position:absolute;
        z-index:2;
        display: grid;
        grid-templates-rows: minmax(0,1fr) 100px;
        grid-templates-columns: minmax(0,1fr) auto;
        grid-templates-areas: 'main sidebar'
                                'info sidebar';
        align-items:flex-start;
        transition:opacity 0.2s ease-in;
        width: 100%;
        height: 100%;
        top: 0px;
        left:0px;
        & article, & aside, & .user-info{
            padding: ${({theme})=>theme.dims.padding.largePadding};
        }
        & article.main{ grid-area: main; }
        & aside.sidebar{ grid-area: sidebar; }
        & .user-info{ grid-area: info; align-self:middle;}
    }
`;

let Video = ({index, video, doLike}) => {
    return(
        <VideoContainer key={index}>
            
            <div className="info">
                <aside className="sidebar">
                    <button onClick={() => doLike(video.id) } style={{ backgroundColor:(video.isLikedByCurrentUser ? 'red' : 'inherit') }}>like</button>
                </aside>
                <div className="user-info">
                    <h2>{video.title}</h2>
                </div>
            </div>
            <Player video={video}></Player>
            
        </VideoContainer>
    )
}

export default Video;