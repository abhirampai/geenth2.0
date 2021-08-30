import "./App.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { songData } from "./api/songs";
import MusicBar from "./Components/MusicBar";
import { useState } from "react";
function App() {
  const options = {
    audioLists: songData,
    mode: "mini",
  };
  const [audioInstance, setAudioInstance] = useState(null);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <>
      <ReactJkMusicPlayer
        {...options}
        getAudioInstance={(instance) => {
          setAudioInstance(instance);
        }}
      />
      <MusicBar AudioInstance={audioInstance} />
    </>
  );
}

export default App;
