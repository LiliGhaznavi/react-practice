import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStepDecrement() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <>
      <button onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (
        <main className="container">
          <div>
            <button onClick={handleStepDecrement}>-</button>
            <h2>Step: {step}</h2>
            <button onClick={() => setStep((s) => s + 1)}>+</button>
          </div>
          <div>
            <button onClick={() => setCount((c) => c - step)}>-</button>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount((c) => c + step)}>+</button>
          </div>
          <p>Today is Mon, Feb 4 2025.</p>
        </main>
      )}
    </>
  );
}
