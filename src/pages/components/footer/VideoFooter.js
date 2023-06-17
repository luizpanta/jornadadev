import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from "@mui/icons-material/MusicNote"

function VideoFooter({name, description, music}) {
  return (
    <div className='VideoFooter'>
      <div className='VideoFooter__text'>
        <h3>{ name }</h3>
        <p>{ description }</p>
        <div className='VideoFooter__music'>
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooterMusic_text">
            <p>{ music }</p>
          </div>        
        </div>       
      </div>
      <img
       className='VideoFooter__record'
       alt="Imagen de um vinil girando"
       src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
       />
    </div>
  )
}

export default VideoFooter