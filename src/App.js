import "./App.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { songData } from "./api/songs";
function App() {
  const options = {
    audioLists: songData,
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ReactJkMusicPlayer {...options} />
  );
}

export default App;
