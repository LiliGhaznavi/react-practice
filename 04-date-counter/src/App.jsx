import { useState } from "react";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen((is) => !is)}>&times;</button>
      {isOpen && (
        <main className="container">
          <div>
            <button>-</button>
            <h2>Step: 1</h2>
            <button>+</button>
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
