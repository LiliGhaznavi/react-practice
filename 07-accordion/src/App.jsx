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
    <div className="accordion">
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
    </div>
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
      <p className="icon">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </p>
      {isOpen && <div className="hidden-box">{children}</div>}
    </div>
  );
}
