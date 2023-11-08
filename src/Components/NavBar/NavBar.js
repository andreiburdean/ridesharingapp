import React from "react"
import "./NavBar.css"

function NavBar(props){

    const handleHomeClick = () => {
        props.handleButtonClick(0);
      };
    
      const handleLogInClick = () => {
        props.handleButtonClick(1);
      };
    
      const handleRegisterClick = () => {
        props.handleButtonClick(2);
      };

    return(
        <div className="NavBar">
            <div id="NameButton">
                <button onClick={handleHomeClick}>RideSharingApp</button>
            </div>
            <div id="LoginRegister">
                <button onClick={handleLogInClick}>Log In</button>
                <button onClick={handleRegisterClick}>Register</button>
            </div>
        </div>
    );
}

export default NavBar;