import { useState } from "react";

function Events(params) {
  const [nameValue, setNameValue] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameValue, setLastNameValue] = useState("");

  const changeTitle = () => {
    event.preventDefault()
    setName(nameValue);
    setLastName(lastNameValue);
  };

  const changeToBlack = (event) => {
    event.target.style.background = "black";
  };
  const changeToWhite = (event) => {
    event.target.style.background = "white";
  };

  const handleNameChange = (event) => {
    setNameValue(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastNameValue(event.target.value);
  };

  return (
    <form action="">
      <div className="h-dvh text-white flex flex-col gap-3 justify-center items-center bg-teal-800">
        <h1 className="text-4xl">
          Hello {name} {lastName}
        </h1>
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="What is your name?"
          className="w-60 border-2 border-amber-200 p-2 bg-teal-950"
          value={nameValue}
        />
        <input
          onChange={handleLastNameChange}
          type="text"
          placeholder="What is your last name?"
          className="w-60 border-2 border-amber-200 p-2 bg-teal-950"
          value={lastNameValue}
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
    </form>
  );
}

export default Events;
