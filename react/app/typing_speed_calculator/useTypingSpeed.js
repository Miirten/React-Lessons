import { useState } from "react";

export default function useTypingSpeed(prompt) {
  const [text, setText] = useState("");
  const [startedAt, setStartedAt] = useState(null);
  const [finishedAt, setFinishedAt] = useState(null);

  function handleTextChange(nextText) {
    if (startedAt === null && nextText !== "") {
      setStartedAt(Date.now());
    }

    if (nextText === prompt && finishedAt === null) {
      setFinishedAt(Date.now());
    }

    setText(nextText);
  }

  const isComplete = text === prompt;

  let wpm = null;

  if (startedAt !== null && finishedAt !== null) {
    const wordCount = prompt.trim().split(/\s+/).length;
    const elapsedMilliseconds = finishedAt - startedAt;
    const elapsedMinutes = elapsedMilliseconds / 60000;

    wpm = Math.round(wordCount / elapsedMinutes);
  }

  function reset() {
    setText("");
    setStartedAt(null);
    setFinishedAt(null);
  }

  return {
    text,
    isComplete,
    wpm,
    handleTextChange,
    reset
  };
}