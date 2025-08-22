import { useState } from "react";

function Events(params) {
  const [title, setTitle] = useState("Hello There");

  const changeTitle = () => {
    setTitle("General Kenobi");
  };

  const changeToBlack = (event) => {
    event.target.style.background = "black"
  }
  const changeToWhite = (event) => {
   event.target.style.background = "white"
  }

  return (
    <div className="h-dvh text-white flex flex-col gap-3 justify-center items-center bg-teal-800">
      <h1 className="text-4xl">{title}</h1>
      <input
        type="text"
        placeholder="What is your name?"
        className="w-60 border-2 border-amber-200 p-2 bg-teal-950"
      />
      <button
        onClick={changeTitle}
        onMouseOver={changeToBlack}
        onMouseLeave={changeToWhite}
        className="w-60 border-2 border-amber-200 p-2 bg-teal-500 hover:cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
}

export default Events;
