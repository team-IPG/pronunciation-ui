import React, { useState, useEffect } from "react";
import { fetchAudio } from "../../apis/voice-apis/voice-svc";

const Player = (name) => {
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const toggle = () => {
    setAudio(new Audio(fetchAudio(name)));
    setPlaying(!playing);
  }
  useEffect(() => {
    if (playing && audio !== null) {
      playing ? audio.play() : audio.pause();
      setAudio(null);
    }
  }, [playing, audio]);

  useEffect(() => {
    if (audio) {
      audio.addEventListener("ended", () => setPlaying(false));
      return () => {
        audio.removeEventListener("ended", () => setPlaying(false));
      };
    }
  }, [audio]);

  return [playing, toggle];
};

export const PlayAudio = ({ name, type, label}) => {
  const [playing, toggle] = Player(name); 

  return (
    <button className={`btn btn-${type}`} onClick={toggle}>
      {label ? "Test" : playing ? "Pause" : "Play"}
    </button>
  );
};
