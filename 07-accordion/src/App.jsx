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
  const [curOpen, setCurOpen] = useState(null);

  return (
    <ul>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </ul>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => onOpen(isOpen ? null : num)}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? `-` : `+`}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
