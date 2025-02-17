import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again">Again!</button>
      <div className="number">?</div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <section className="left">
        <input type="number" className="guess" />
        <button className="btn check">Check!</button>
      </section>
      <section className="right">
        <p className="message">Start guessing...</p>
        <p className="label-score">
          💯 Score: {<sapn className="score">20</sapn>}
        </p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">0</span>
        </p>
      </section>
    </main>
  );
}
