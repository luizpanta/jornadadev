import React from 'react'
import "./video.css"

function Video() {
  return (
    <div className='video'>
      Eu sou um video
      <video 
        className='video__player'
        src="https://www.tiktok.com/@paulosantos2058/video/6809238950750866693"
      >

      </video>
    </div>
  )
}

export default Video