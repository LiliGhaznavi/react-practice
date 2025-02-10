import { useState } from "react";
import "./index.css";

export default function App() {
  const [bill, setBill] = useState(0);
  const [yourPercentage, setYourPercentage] = useState(0);
  const [friendPercentage, setFriendPercentage] = useState(0);

  function handleReset() {
    setBill(0);
    setYourPercentage(0);
    setFriendPercentage(0);
  }

  return (
    <div className="container">
      <BillInput bill={bill} OnAddBill={setBill} />
      <SelectPercentage
        id={1}
        percentage={yourPercentage}
        onAddPercentage={setYourPercentage}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        id={2}
        percentage={friendPercentage}
        onAddPercentage={setFriendPercentage}
      >
        How did your friend like the service?
      </SelectPercentage>
      <Output
        bill={bill}
        yourPercentage={yourPercentage}
        friendPercentage={friendPercentage}
      />
      <Reset onReset={handleReset} />
    </div>
  );
}

function BillInput({ bill, OnAddBill }) {
  return (
    <div>
      <label htmlFor="billAmount">How much was the bill?</label>
      <input
        value={bill}
        onChange={(e) => OnAddBill(Number(e.target.value))}
        type="text"
        id="billAmount"
      />
    </div>
  );
}

function SelectPercentage({ id, percentage, onAddPercentage, children }) {
  return (
    <div>
      <label htmlFor={`serviceRating${id}`}>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onAddPercentage(Number(e.target.value))}
        id={`serviceRating${id}`}
      >
        <option value={0}>Dessatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!d(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, yourPercentage, friendPercentage }) {
  const tipAverage = (yourPercentage + friendPercentage) / 2;

  return (
    <h1>{`You pay $${bill + tipAverage} ($${bill} + $${tipAverage} tip)`}</h1>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
