import Form from "./Form.jsx";
import Register from "./Register.jsx";

const isLoggedIn = false
const isRegistered = false

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
      <Form isRegistered={isRegistered}/>
    </div>
  );
}

export default UserLogin;
