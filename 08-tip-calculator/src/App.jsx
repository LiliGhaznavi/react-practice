export default function App() {
  return (
    <div>
      <BillInput />
      <SelectPercentage id={1} />
      <SelectPercentage id={2} />
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <label htmlFor="billAmount">How much was the bill?</label>
      <input type="text" id="billAmount" />
    </div>
  );
}

function SelectPercentage({ id }) {
  return (
    <div>
      <label htmlFor="serviceRating">How did you like the service?</label>
      <select id={`serviceRating${id}`}>
        <option>Dessatisfied(0%)</option>
        <option>It was okay(5%)</option>
        <option>It was good(10%)</option>
        <option>Absolutely amazing!d(20%)</option>
      </select>
    </div>
  );
}

function Output() {
  return <h1>You pay $100 ($100 + $5tip)</h1>;
}

function Reset() {
  return <button>Reset</button>;
}
