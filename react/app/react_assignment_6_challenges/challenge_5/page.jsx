"use client";

import { useState, useRef } from "react";

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playRef = useRef(null);

  function handleClick() {
    if (isPlaying) {
      playRef.current.pause();
    } else {
      playRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video ref={playRef} width="250">
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
