import React, { useState } from "react";

function GuessTheNumber() {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(Math.floor(Math.random() * 100) + 1);
  const [message, setMessage] = useState("");
  const [guess, setGuess] = useState("");

  // Function to handle guess checking
  const handleGuess = () => {
    const guessNumber = parseInt(guess, 10);
    setCount(count + 1);
    if (guessNumber === random) {
      setMessage(`Congratulation! You guessed the number in ${count + 1} attempts.`);
    } else if (guessNumber > random) {
      setMessage("Too high! Try again.");
    } else if (guessNumber < random) {
      setMessage("Too low! Try again.");
    }
    if (guessNumber > 100 || guessNumber <= 0) {
      setMessage("Please enter a number between 1 and 100.");
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setRandom(Math.floor(Math.random() * 100) + 1);
    setCount(0);
    setGuess("");
    setMessage("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "50px 0" }}>
      <h2>Guess the Number</h2>
      <input
        placeholder="Enter a number between 1 and 100"
        style={{ width: "300px", padding: "5px" }}
        id="guess-input"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <div>
        <button onClick={handleGuess}>Check Guess</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
      <div>{message}</div>
    </div>
  );
}

export default GuessTheNumber;
