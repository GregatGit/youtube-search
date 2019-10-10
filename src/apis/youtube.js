import axios from 'axios'

const KEY = 'AIzaSyBW-87FN6tWlBA-ufgNMu_6_m5mhtZ3oH4'

export default axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3/`,
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

