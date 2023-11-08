import React from "react";
import {useState} from "react";
import NavBar from "./Components/NavBar/NavBar";
import Description from "./Components/Descriptions/Description";
import Footer from "./Components/Footer/Footer";
import LoginForm from "./Components/RegisterLoginForms/LoginForm";
import RegisterForm from "./Components/RegisterLoginForms/RegisterForm";
import "./PrimaryPage.css"

function PrimaryPage(){
  const [buttonPressed, setButtonPressed] = useState(0);
  const [formArray, setFormArray] = useState([]);

  const handleButtonClick = (value) => {
    setButtonPressed(value);
  };

  const handleFormSubmit = (formData) => {
    setFormArray([...formArray, formData]);
    console.log(...formArray);
  };

  let content;

  if (buttonPressed === 0) {
    content = (
      <div className="PrimaryPage">
        <NavBar handleButtonClick={handleButtonClick} />
        <Description></Description>
        <Footer />
      </div>
    );
  } else if (buttonPressed === 1) {
    content = (
      <div className="PrimaryPage">
        <NavBar handleButtonClick={handleButtonClick} />
        <LoginForm onFormSubmit={handleFormSubmit} handleButtonClick={handleButtonClick} />
        <Footer />
      </div>
    );  
  } else if (buttonPressed === 2) {
    content = (
      <div className="PrimaryPage">
        <NavBar handleButtonClick={handleButtonClick} />
        <RegisterForm onFormSubmit={handleFormSubmit}/>
        <Footer />
      </div>
    );
  }

  return content;
}

export default PrimaryPage;