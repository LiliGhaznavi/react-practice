import "./index.css";
import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + count);

  function handleReset(e) {
    e.preventDefault();
    setStep(1);
    setCount(0);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="container" onSubmit={handleReset}>
          <div className="slidecontainer flex">
            <input
              type="range"
              min={1}
              max={10}
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
            <h2>{step}</h2>
          </div>

          <div className="flex">
            <p onClick={() => setCount((c) => c - step)}>-</p>
            <input
              className="countInput"
              type="text"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <p onClick={() => setCount((c) => c + step)}>+</p>
          </div>
          <p>
            {count === 0 && `Today is `}
            {count > 0 && `${count} days from today is `}
            {count < 0 && `${Math.abs(count)} days ago from today was `}
            {currentDate.toDateString()}.
          </p>
          {step !== 1 || count !== 0 ? (
            <button className="reset" onClick={handleReset}>
              Reset
            </button>
          ) : null}
        </div>
      )}
    </>
  );
}
