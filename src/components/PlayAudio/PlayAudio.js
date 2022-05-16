import React, { useState, useEffect } from "react";
import { fetchAudio } from "../../apis/voice-apis/voice-svc";

const Player = (name) => {
  const [audio] = useState(new Audio(fetchAudio(name)));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle];
};

export const PlayAudio = ({ name, type, label }) => {
  const [playing, toggle] = Player(name);

  return (
    <button className={`btn btn-${type}`} onClick={toggle}>
      {label ? "Test" : (playing ? "Pause" : "Play")}
    </button>
  );
};
