import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos, onVideoSelect }) => {
  function showVideos(movies) {
    return movies.map((movie, index) => {
      return (
        <VideoItem key={index} onVideoSelect={onVideoSelect} video={movie} />
      )
    })
  }

  return (
    <div className="five wide column">
      <div className="ui relaxed divided list">{showVideos(videos)}</div>
    </div>
  )
}

export default VideoList
