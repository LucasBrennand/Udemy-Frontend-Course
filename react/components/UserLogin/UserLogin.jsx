import Form from "./Form.jsx";

const isLoggedIn = false

const handleLogin = () => {
  if (isLoggedIn){
    return <h1>Hello User</h1>
  }
  else{
    <Form/>
  }
}



function UserLogin() {
  return (
    <div className="flex justify-center items-center h-dvh">
      {isLoggedIn ? <h1>Hello</h1> : <Form/>}
    </div>
  );
}

export default UserLogin;
