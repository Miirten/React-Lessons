'use client'
import { useState, useEffect } from 'react';
import StoryTray from './StoryTray.js';
import Link from 'next/link';

const initialStories = [
  {id: 0, label: "Ankit's Story" },
  {id: 1, label: "Taylor's Story" },
];

export default function App() {
  const [stories, setStories] = useState([...initialStories])
  const time = useTime();

  return (
    <main>
            <Link href="/">← Back to projects</Link>

    <div
      style={{
        width: '100%',
        height: '100%',
        textAlign: 'center',
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now.</h2>
      <StoryTray stories={stories} />
    </div>
    </main>
  );
}

function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
