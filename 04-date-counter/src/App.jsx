export default function App() {
  return <Counter />;
}

function Counter() {
  return (
    <>
      <button>&times;</button>
      {
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
      }
    </>
  );
}
