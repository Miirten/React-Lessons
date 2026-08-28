'use client'
import { useState, useEffect } from 'react';
import Clock from './Clock.js';
import Link from 'next/link';


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

export default function App() {
  const time = useTime();
  return (
    <main>
      <Link href="/">← Back to projects</Link>
      <Clock time={time} />

    </main>
  );
}
