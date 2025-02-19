import { useState } from "react";
import "./index.css";

export default function App() {
  const [secretNumber, setSecretNumber] = useState(
    Math.trunc(Math.random() * 20) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("Start guessing...");
  const [score, setScore] = useState(20);
  const [highscore, setHighscore] = useState(0);
  const [showSecretNumber, setShowSecretNumber] = useState(false);
  const [isWin, setIsWin] = useState(false);

  function handleIsCheck() {
    if (score > 1) {
      if (guess === secretNumber) {
        setMessage("🎉 Correct Number");
        setShowSecretNumber(true);
        setIsWin(true);
        if (score > highscore) {
          setHighscore(score);
        }
      } else if (guess > secretNumber) {
        setMessage("📈 Too high");
        if (score !== 1) {
          setScore((s) => s > 1 && s - 1);
        }
      } else if (guess < secretNumber) {
        setMessage("📉 Too low");

        if (score !== 1) {
          setScore((s) => s > 1 && s - 1);
        }
      }
    } else if (score === 1) {
      setScore(0);
      setMessage("💥 You lost the game!");
      setShowSecretNumber(true);
    }
  }

  function handleRefresh() {
    setMessage("Start guessing...");
    setScore(20);
    setSecretNumber(Math.trunc(Math.random() * 20) + 1);
    setGuess("");
    setShowSecretNumber(false);
    setIsWin(false);
  }

  return (
    <div style={{ backgroundColor: isWin ? "#60b347" : "#222" }}>
      <Header
        secretNumber={secretNumber}
        onRefresh={handleRefresh}
        showSecretNumber={showSecretNumber}
        isWin={isWin}
      />
      <Main
        secretNumber={secretNumber}
        guess={guess}
        onGuess={setGuess}
        message={message}
        score={score}
        highscore={highscore}
        onCheck={handleIsCheck}
      />
    </div>
  );
}

function Header({ secretNumber, onRefresh, showSecretNumber, isWin }) {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again" onClick={onRefresh}>
        Again!
      </button>
      <div className="number" style={{ width: isWin ? "30rem" : "15rem" }}>
        {showSecretNumber ? secretNumber : "?"}
      </div>
    </header>
  );
}

function Main({ guess, onGuess, message, score, highscore, onCheck }) {
  return (
    <main>
      <section className="left">
        <input
          type="number"
          className="guess"
          value={guess > 0 ? guess : ""}
          onChange={(e) => onGuess(Number(e.target.value))}
        />
        <button className="btn check" onClick={onCheck}>
          Check!
        </button>
      </section>
      <section className="right">
        <p className="message">{message}</p>
        <p className="label-score">
          💯 Score: {<sapn className="score">{score}</sapn>}
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
  );
}
