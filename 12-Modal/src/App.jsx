import "./index.css";
import { useState } from "react";

export default function App() {
  const [isOpen, setIsOpen] = useState("hidden");

  return (
    <>
      <Button onOpen={setIsOpen}>1</Button>
      <Button onOpen={setIsOpen}>2</Button>
      <Button onOpen={setIsOpen}>3</Button>
      <Modal isOpen={isOpen} onOpen={setIsOpen} />
      <Overlay isOpen={isOpen} onOpen={setIsOpen} />
    </>
  );
}

function Button({ children, onOpen }) {
  return (
    <button className="show-modal" onClick={() => onOpen("")}>
      Show Modal {children}
    </button>
  );
}

function Modal({ isOpen, onOpen }) {
  return (
    <div className={`modal ${isOpen}`}>
      <button className="close-modal" onClick={() => onOpen("hidden")}>
        &times;
      </button>
      <h1>I&apos;m a modal window</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut enim animi
        accusantium eos pariatur amet esse placeat ullam porro labore fuga quasi
        optio similique fugit maxime, iste repellendus aliquam cupiditate?
      </p>
    </div>
  );
}

function Overlay({ isOpen, onOpen }) {
  return (
    <div className={`overlay ${isOpen}`} onClick={() => onOpen("hidden")}></div>
  );
}
