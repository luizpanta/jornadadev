import './App.css';
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="Paulo"
          description="Brecker"
          music="Epic music"
          url="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        />
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
