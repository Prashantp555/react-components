import React, { useState } from 'react';

const DiceGame = () => {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
    const [turn, setTurn] = useState(1);
    const [rollsLeft, setRollsLeft] = useState(5);
    const [diceValue, setDiceValue] = useState(null);
    const [winner, setWinner] = useState(null);

    const rollDice = () => {
        if (rollsLeft === 0 || winner) return;

        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);

        if (turn === 1) {
            setPlayer1Score(player1Score + value);
            setTurn(2);
        } else {
            setPlayer2Score(player2Score + value);
            setTurn(1);
            setRollsLeft(rollsLeft - 1);
        }

        if (rollsLeft === 1 && turn === 2) {
            if (player1Score + value > player2Score) {
                setWinner('Player 1');
            } else if (player1Score + value < player2Score) {
                setWinner('Player 2');
            } else {
                setWinner('Draw');
            }
        }
    };

    const resetGame = () => {
        setPlayer1Score(0);
        setPlayer2Score(0);
        setTurn(1);
        setRollsLeft(5);
        setDiceValue(null);
        setWinner(null);
    };

    return (
        <div style={{ display: 'flex', height: '100vh', textAlign: 'center' }}>
            <div style={{ flex: 1, backgroundColor: '#f8d7da', padding: '20px' }}>
                <h2>Player 1</h2>
                <p>Score: {player1Score}</p>
                {turn === 1 && <p>Your Turn</p>}
            </div>
            <div style={{ flex: 1, backgroundColor: '#d4edda', padding: '20px' }}>
                <h2>Player 2</h2>
                <p>Score: {player2Score}</p>
                {turn === 2 && <p>Your Turn</p>}
            </div>
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}
            >
                <h1>Dice Game</h1>
                <button onClick={rollDice} disabled={rollsLeft === 0 || winner}>
                    Roll Dice
                </button>
                {diceValue && <p>Dice Value: {diceValue}</p>}
                {winner && <h2>Winner: {winner}</h2>}
                <button onClick={resetGame}>Reset Game</button>
            </div>
        </div>
    );
};

export default DiceGame;