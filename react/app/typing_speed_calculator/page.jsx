'use client'

import { useEffect, useRef } from "react";
import useTypingSpeed from "./useTypingSpeed";

const prompt = "The quick brown fox jumps over the lazy dog";

export default function TypingSpeedPage() {
  const textareaRef = useRef(null);

  const {
    text,
    isComplete,
    wpm,
    handleTextChange,
    reset
  } = useTypingSpeed(prompt);

  useEffect(() => {
    textareaRef.current.focus();
  }, []);

  function handleReset() {
    reset();
    textareaRef.current.focus();
  }

  return (
    <main>
      <h1>Typing Speed Test</h1>

      <p>Type this sentence exactly:</p>

      <p>
        <strong>{prompt}</strong>
      </p>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => handleTextChange(e.target.value)}
        placeholder="Start typing here..."
        rows={5}
        disabled={isComplete}
      />

      {isComplete ? (
        <>
          <p>
            Complete! Your speed was <strong>{wpm} WPM</strong>.
          </p>

          <button onClick={handleReset}>
            Try again
          </button>
        </>
      ) : (
        <p>Keep typing until your text exactly matches the prompt.</p>
      )}
    </main>
  );
}