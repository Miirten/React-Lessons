'use client'
import { useState } from 'react';

export default function Page() {
    const [count2, setCount2] = useState(0);
    
    
    function handleClick2() {
        setCount2(count2 + 2);
    }
    


    return (
        <>
            <div>
                <h1>Counters that update seperately</h1>
                <div><MyButton /></div>
                <div><MyButton /></div>
            </div>

            <div>
                <h2>Counters that update together</h2>
                <p><YourButton count={count2} onClick={handleClick2} /></p>
                <p><YourButton count={count2} onClick={handleClick2} /></p>
            </div>
        </> 
        );
}

function MyButton() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('');
    const [resets, setResets] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    
    function handleClick() {
        const nextCount = count + 1;
    

    if (nextCount == 20) {
        const nextResets = resets + 1;

        if (nextResets == 2) {
            setGameOver(true);
            return
        }

        setResets(nextResets);

        setMessage("You have done it now! Counter reset. Don't do it again.");
        setCount(0);
    } else {
        setMessage('');
        setCount(nextCount);
    }
    }
    if (gameOver) {
        return (
            <p>You done goofed. No more clicking for you.</p>
        );
    }
    return (
        <>
            <button onClick={handleClick}>
                My button has been clicked {count} times.
            </button>

            {count >= 5 && (
                <p>You have clicked me a few times.</p>
            )}
            {count >= 10 && (
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
