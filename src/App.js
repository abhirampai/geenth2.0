import "./App.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import axios from "axios";
import MusicBar from "./Components/MusicBar";
import { useEffect, useState } from "react";
function App() {
  const [audioInstance, setAudioInstance] = useState(null);
  const [options, setOptions] = useState({
    audioLists: [],
    mode: "mini",
    showMediaSession: false,
    showDownload: false,
    defaultVolume: 0,
    volumeFade: { fadeIn: 300, fadeOut: 300 },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let isMounted = true; // note mutable flag
    setLoading(true);
    axios.get("http://localhost:1337/songs").then((res) => {
      const results = [];
      res.data.forEach((item) =>
        results.push({
          name: item.name,
          singer: item.singer,
          musicSrc: "http://localhost:1337" + item.musicSrc.url,
          cover: "http://localhost:1337" + item.cover.url,
        })
      );
      if (isMounted) setOptions({ ...options, audioLists: results });
    });
    setLoading(false);
    return () => {
      isMounted = false;
    }; // eslint-disable-next-line
  }, []);
  if (loading) return <>Loading</>;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <>
      {console.log(options)}
      <ReactJkMusicPlayer
        {...options}
        getAudioInstance={(instance) => {
          setAudioInstance(instance);
        }}
        volume="100"
      />
      <MusicBar AudioInstance={audioInstance} songData={options.audioLists} />
    </>
  );
}

export default App;
