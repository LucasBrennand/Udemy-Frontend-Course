import { useState } from "react";
import UserInput from "./UserInput";
import PasswordInput from "./PasswordInput";

function LoginScreen(props) {
  const username = props.username;
  const password = props.password;
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(username, password)

  const handleUserInput = (event) => {
    setUserInput(event.target.value)
  }
  
  const handlePasswordInput = (event) => {
    setPasswordInput(event.target.value)
  }

  const handleLogin = (event) => {
  event.preventDefault();
  if (userInput === username && passwordInput === password) {
    setIsLoggedIn(true);   // ✅ switch screen
    alert("yes");
  } else {
    alert("Incorrect");
  }
};


  const checkLoggedIn = () => {
    if (isLoggedIn) {
      return <h1 className="text-white text-4xl">Hello</h1>;
    } else {
      return (
        <form onSubmit={handleLogin} className="flex flex-col gap-2 h-64 w-1/3 items-center justify-center">
          <UserInput value={userInput} onChange={handleUserInput} />
          <PasswordInput value={passwordInput} onChange={handlePasswordInput} />
          <button type="submit" className="bg-blue-600 hover:cursor-pointer w-full rounded-2xl text-white text-2xl p-2">
            Login
          </button>
        </form>
      );
    }
  };

  return (
    <div className="h-svh flex flex-col justify-center items-center bg-cyan-200">
      {checkLoggedIn()}
    </div>
  );
}

export default LoginScreen;
