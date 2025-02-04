import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);

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
            <button>-</button>
            <h2>Count: 1</h2>
            <button>+</button>
          </div>
          <p>Today is Mon, Feb 4 2025.</p>
        </main>
      )}
    </>
  );
}
