function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer>
      {new Date().toLocaleTimeString()} We&apos;re currently open!
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="../public/pizzas/spinaci.jpg" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

export default App;
