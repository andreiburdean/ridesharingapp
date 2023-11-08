import React, { useState } from "react";
import Footer from "./Components/Footer/Footer.js";
import NavBar from "./Components/NavBar/NavBar.js";
import LoginForm from "./Components/RegisterLoginForms/LoginForm.js";
import RegisterForm from "./Components/RegisterLoginForms/RegisterForm.js";
import './App.css';

function App() {
  const [buttonPressed, setButtonPressed] = useState(0);

  const handleButtonClick = (value) => {
    setButtonPressed(value);
  };

  let content;

  if (buttonPressed === 0) {
    content = (
      <div className="App">
        <NavBar handleButtonClick={handleButtonClick} />
        <Footer />
      </div>
    );
  } else if (buttonPressed === 1) {
    content = (
      <div className="App">
        <NavBar handleButtonClick={handleButtonClick} />
        <LoginForm />
        <Footer />
      </div>
    );
  } else if (buttonPressed === 2) {
    content = (
      <div className="App">
        <NavBar handleButtonClick={handleButtonClick} />
        <RegisterForm />
        <Footer />
      </div>
    );
  }

  return content;
}

export default App;
