import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function LoginForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dataBase = {
    "user" : "abcd",
    "password" : "1234"
  };

  const handleButtonClicked = () => {
    //const formData = { username, password };
    if(dataBase["user"] === username && dataBase["password"] === password)
    {
      navigate("./MainApp");
    }
    else{
      alert("Wrong username or password");
    }
    /*fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.validation === true) {
          history.push("./src/MainApp");
        } else {
        }
      })
      .catch(error => {
      });*/
  };
  

  const handleRegisterClick = () => {
    props.handleButtonClick(2);
  };
  
  return (
    <div className="LoginForm">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
          <i className='bx bxs-user'></i>
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <i className='bx bxs-lock-alt'></i>
        </div>
        <div className="remember-forget">
          <label><input type="checkbox" /> Remember me</label>
          <button className="forgotButton">Forgot password?</button>
        </div>
        <button type="button" className="btn" onClick={handleButtonClicked}>Login</button>
        <div className="register">
          <p>Don't have an account? <button className="registerButton" onClick={handleRegisterClick}>Register</button></p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
