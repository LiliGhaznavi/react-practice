import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad corrupti officia odit dicta iusto tempora tenetur, repellendus quas. Quas iusto laudantium totam, sunt illum ducimus earum. Aliquid, labore dolor.",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad corrupti officia odit dicta iusto tempora tenetur, repellendus quas. Quas iusto laudantium totam, sunt illum ducimus earum. Aliquid, labore dolor.",
  },
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad corrupti officia odit dicta iusto tempora tenetur, repellendus quas. Quas iusto laudantium totam, sunt illum ducimus earum. Aliquid, labore dolor.",
  },
];

export default function App() {
  return <Accordion data={faqs} />;
}

function Accordion({ data }) {
  return (
    <ul>
      {data.map((el, i) => (
        <AccordionItem title={el.title} text={el.text} num={i} key={el.title} />
      ))}
    </ul>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
