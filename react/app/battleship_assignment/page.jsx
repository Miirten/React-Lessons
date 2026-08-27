'use client'
import { useEffect, useState } from 'react'


function Square({ value, onSquareClick }) {
return ( 
    <button className="square" onClick={onSquareClick}>{value}</button>);
}

function createShip() {
    const boardSize = 4;
    const shipLength = 3;

    const isHorizontal = Math.random() < 0.5;

    if (isHorizontal) {
        const randomRow = Math.floor(Math.random() * boardSize);
        const randomStartColumn = Math.floor(
            Math.random() * (boardSize - shipLength + 1)
    );
    
    const startIndex = randomRow * boardSize + randomStartColumn;

    return [
        startIndex,
        startIndex + 1,
        startIndex + 2
    ];
    }

    const randomColumn = Math.floor(Math.random() * boardSize);

    const randomStartRow = Math.floor(
        Math.random() * (boardSize - shipLength + 1)
    );

    const startIndex = randomStartRow * boardSize + randomColumn;

    return [
        startIndex,
        startIndex + boardSize,
        startIndex + boardSize * 2
    ];
}

function calculateWinner(squares, ship) {
    const shipIsSunk = ship.every((shipSquare) => {
        return squares[shipSquare] === 'X';
    });

  if (shipIsSunk) {
    return 'You sunk the ship!';
  }
    return null;
}

function takeShot(squares, ship, squareIndex) {
    const copiedSquares = squares.slice();

    if (ship.includes(squareIndex)) {
        copiedSquares[squareIndex] = 'X'
    } else {
        copiedSquares[squareIndex] = 'O'
    }

    return copiedSquares;
}

function getNearbySquares(squareIndex) {
    const boardSize = 4;
    const nearbySquares = [];

    const row = Math.floor(squareIndex / boardSize);
    const column = squareIndex % boardSize;

    if (row > 0) {
        nearbySquares.push(squareIndex - boardSize);
    }

    if (row < boardSize - 1) {
        nearbySquares.push(squareIndex + boardSize);
    }

    if (column > 0) {
        nearbySquares.push(squareIndex - 1);
    }

    if (column < boardSize - 1) {
        nearbySquares.push(squareIndex + 1);
    }

    return nearbySquares;
}

// Board
function Board({
    title,
    squares,
    setSquares,
    ship, 
    canClick,
    onShotComplete,
    showInstructions,
}) {
    const winner = calculateWinner(squares, ship);

    function handleClick(i) {
        if (!canClick || squares[i] !== null || winner) {
        return;
        }

        const copiedSquares = takeShot(squares, ship, i);

        setSquares(copiedSquares);

        onShotComplete(copiedSquares);
    }


    let status;

    if (winner) {
        status = `${title}'s ship was sunk.`;
    } else if (showInstructions) {
        status = "Find and sink the hidden ship.";
    } else {
        status = null;
    }

    return (
        <section>
            <h2>{title}</h2>

        {status && (
            <div className="status">{status}</div>
        )}

          <div className="board-row">
            <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          </div>

        <div className="board-row">
            <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
           <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          </div>

         <div className="board-row">
            <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            <Square value={squares[9]} onSquareClick={() => handleClick(9)} />
            <Square value={squares[10]} onSquareClick={() => handleClick(10)} />
            <Square value={squares[11]} onSquareClick={() => handleClick(11)} />
        </div>

        <div className="board-row">
            <Square value={squares[12]} onSquareClick={() => handleClick(12)} />
            <Square value={squares[13]} onSquareClick={() => handleClick(13)} />
            <Square value={squares[14]} onSquareClick={() => handleClick(14)} />
            <Square value={squares[15]} onSquareClick={() => handleClick(15)} />
        </div>
  
  </section>
  );
}

// Game
export default function Game() {
    const [humanSquares, setHumanSquares] = useState(Array(16).fill(null))
    const [humanShip, setHumanShip] = useState(createShip);

    const [aiSquares, setAiSquares] = useState(Array(16).fill(null))
    const [aiShip, setAiShip] = useState(createShip);

    const [turn, setTurn] = useState('human')

    const humanWon = calculateWinner(aiSquares, aiShip);
    const aiWon = calculateWinner(humanSquares, humanShip);
    const gameOver = humanWon || aiWon;

    let gameStatus;

    if (humanWon) {
        gameStatus = 'You win!';
    } else if (aiWon) {
        gameStatus = 'You have lost!';
    } else if (turn === 'human') {
        gameStatus = 'Your turn, choose a square to shoot at.';
    } else {
        gameStatus = 'Your opponent is choosing a square.';
    }

    const [aiTargets, setAiTargets] = useState([]);

    function startNewGame() {
        setHumanSquares(Array(16).fill(null));
        setHumanShip(createShip());
        
        setAiSquares(Array(16).fill(null));
        setAiShip(createShip());

        setAiTargets([]);
        setTurn('human');
    }

    function handleHumanShot(nextAiSquares) {
        const humanWon = calculateWinner(nextAiSquares, aiShip);

        if (!humanWon) {
            setTurn('ai');
        }
    }

    useEffect(() => {
    if (turn !== 'ai' || gameOver) {
        return;
    }

    const timer = setTimeout(() => {
        const availableSquares = [];

        for (let i = 0; i < humanSquares.length; i++) {
            if (humanSquares[i] === null) {
                availableSquares.push(i);
            }
        }

        if (availableSquares.length === 0) {
        return;
        }

        const validTargets = aiTargets.filter((squareIndex) => {
            return humanSquares[squareIndex] === null;
        });

        let targetSquare;

        if (validTargets.length > 0) {
            targetSquare = validTargets[0];

            setAiTargets(validTargets.slice(1));
        } else {
            setAiTargets([]);
            
            const randomNumber = Math.floor(
                Math.random() * availableSquares.length
            );

            targetSquare = availableSquares[randomNumber];
        }

        const didHitShip = humanShip.includes(targetSquare);

        const copiedSquares = takeShot(
            humanSquares,
            humanShip,
            targetSquare
        );

        setHumanSquares(copiedSquares);

        if (didHitShip) {
            const nearbySquares = getNearbySquares(targetSquare).filter(
                (squareIndex) => humanSquares[squareIndex] === null
            );

            setAiTargets((currentTargets) => {
                return [
                    ...new Set([
                        ...currentTargets,
                        ...nearbySquares,
                    ]),
                ];
            });
        }

        const aiWonAfterShot = calculateWinner(
        copiedSquares,
        humanShip
        );

        if (!aiWonAfterShot) {
        setTurn('human');
        }
    }, 700);

    return () => clearTimeout(timer);
    }, [turn, gameOver, humanSquares, humanShip, aiTargets]);

    return (
        <main>
            <h1>Battleship</h1>

                  <button onClick={startNewGame}>New game</button>

            <p>
                Sink your enemies ship before they sink yours!
            </p>

            <div className="status">{gameStatus}</div>
            <div className="game-boards">
                <Board
                    title="Your board"
                    squares={humanSquares}
                    setSquares={setHumanSquares}
                    ship={humanShip}
                    canClick={false}
                    onShotComplete={() => {}}
                    showInstructions={false}
                />

                <Board
                    title="The enemy"
                    squares={aiSquares}
                    setSquares={setAiSquares}
                    ship={aiShip}
                    canClick={turn === 'human' && !gameOver}
                    onShotComplete={handleHumanShot}
                    showInstructions={true}
                />
            </div>
        </main>
    );
}