import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {

  function showVideos(movies) {
    return movies.map(movie => {
      return <VideoItem />
    })
  }

  return (
    <div>
      Video List
      {showVideos(videos)}
    </div>
  )
}

export default VideoList
