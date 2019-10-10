import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {

  function showVideos(movies) {
    return movies.map(movie => {
      return <VideoItem video={movie}/>
    })
  }

  return (
    <div className="ui relaxed divided list">
      {showVideos(videos)}
    </div>
  )
}

export default VideoList
