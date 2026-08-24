'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
  const [count2, setCount2] = useState(0);

  function handleClick2() {
    setCount2((currentCount) => currentCount + 2);
  }

  return (
    <main>
      <Link href="/">← Back to projects</Link>

      <h1>React Counter Page</h1>

      <section>
        <h2>Counters that update separately</h2>

        <div>
          <MyButton />
        </div>

        <div>
          <MyButton />
        </div>
      </section>

      <section>
        <h2>Counters that update together</h2>

        <div>
          <YourButton count={count2} onClick={handleClick2} />
        </div>

        <div>
          <YourButton count={count2} onClick={handleClick2} />
        </div>
      </section>
    </main>
  );
}

function MyButton() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [resets, setResets] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  function handleClick() {
    const nextCount = count + 1;

    if (nextCount === 20) {
      const nextResets = resets + 1;

      // The second time this individual button reaches 20,
      // it stops rendering the button.
      if (nextResets === 2) {
        setGameOver(true);
        return;
      }

      // The first time it reaches 20, reset it and show a warning.
      setResets(nextResets);
      setMessage("You have done it now! Counter reset. Don't do it again.");
      setCount(0);
      return;
    }

    setMessage('');
    setCount(nextCount);
  }

  if (gameOver) {
    return (
      <p>
        You done goofed. No more clicking for you.
      </p>
    );
  }

  return (
    <>
      <button onClick={handleClick}>
        My button has been clicked {count} times.
      </button>

      {count >= 5 && count < 10 && (
        <p>You have clicked me a few times.</p>
      )}

      {count >= 10 && count < 15 && (
        <p>You have clicked me a lot.</p>
      )}

      {count >= 15 && (
        <p>You have clicked me too many times, please stop!</p>
      )}

      {message && <p>{message}</p>}
    </>
  );
}

function YourButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Your button has been clicked {count} times divided by 2.
    </button>
  );
}