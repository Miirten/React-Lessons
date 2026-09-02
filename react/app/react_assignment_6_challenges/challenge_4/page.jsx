'use client'

import { useState, useRef } from "react";

export default function Chat() {
  const [text, setText] = useState("");
  const textRef = useRef("");

  function handleSend() {
    setTimeout(() => {
      alert("Sending: " + textRef.current);
    }, 3000);
  }

  function handleChange(e) {
    const nextText = e.target.value;

    setText(nextText);
    textRef.current = nextText;
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}
