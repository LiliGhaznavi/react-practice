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

  function handleStepDecrement() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <main className="container">
          <div className="flex">
            <button onClick={handleStepDecrement}>-</button>
            <h2>Step: {step}</h2>
            <button onClick={() => setStep((s) => s + 1)}>+</button>
          </div>
          <div className="flex">
            <button onClick={() => setCount((c) => c - step)}>-</button>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount((c) => c + step)}>+</button>
          </div>
          <p>
            {count === 0 && `Today is `}
            {count > 0 && `${count} days from today is `}
            {count < 0 && `${count} days ago from today was `}
            {currentDate.toDateString()}.
          </p>
        </main>
      )}
    </>
  );
}
