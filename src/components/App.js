import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

function App () {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState('')

  useEffect(() => {
    onTermSubmit('Quentin Tarantino')   
  },[] )

  const onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    })
    setVideos(response.data.items)
    setSelectedVideo(response.data.items[0])
  }

  const onVideoSelect = video => {
    setSelectedVideo(video)
  }

    return (
      <div className="ui container">
        <SearchBar onFormSubmit={onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <VideoDetail video={selectedVideo} />
            <VideoList
              onVideoSelect={onVideoSelect}
              videos={videos}
            />
          </div>
        </div>
      </div>
    )
}

export default App
