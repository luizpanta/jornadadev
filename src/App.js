import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './pages/Video';
import db from "./config/firebase"
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  let maxHeigth;
  if (window.innerHeight <= 800){
    maxHeigth = window.innerHeight
  }

  const [ video, setVideo ] = useState([])

  async function getVideos() {
    const videosCollection = collection(db, "videos")
    const videosSnapshot = await getDocs(videosCollection)
    const videosList = videosSnapshot.docs.map(doc => doc.data())
    setVideo(videosList)
  }

  useEffect(()=>{
    getVideos();
  }, [])

  return (
    <div className="App" style={{ maxHeight: maxHeigth + "px" }}>
      <div className='app__videos'>
        {video.map((item) => {
          return (
            <Video 
          likes={item.likes}
          messages={item.messages}
          shares={item.shares}
          name={item.name}
          description={item.description}
          music={item.music}
          url={item.url}
        />
          );
        })}
        
        <Video 
          likes={101}
          messages={220}
          shares={303}
          name="Pedro"
          description="Gatão"
          music="Epic music"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        />
      </div>
    </div>
  );
}

export default App;
