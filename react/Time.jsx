import { useState } from "react";

function Time(params) {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  const getTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };
  setInterval(getTime, 1000);

  return (
    <div className="flex flex-col justify-center items-center h-dvh w-dvw relative bg-cover bg-no-repeat bg-[url(https://i.pinimg.com/originals/45/d0/79/45d0790c293e5dba3077f4ad0c4826c6.gif)]">
      <div className="flex flex-col gap-5 justify-center items-center">
        <h1 className="text-purple-900 text-8xl">{currentTime}</h1>
        <button
          className="bg-cyan-300 w-50 h-15 border-2 border-cyan-400 
             hover:cursor-pointer transition-transform duration-300 
             hover:scale-150 rounded-2xl"
          onClick={getTime}
        >
          GET TIME
        </button>
      </div>
    </div>
  );
}

export default Time;
