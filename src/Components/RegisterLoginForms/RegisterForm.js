import React, {useState} from "react"
import "./RegisterForm.css"

function RegisterForm(props){

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");
  
    const handleButtonClicked = () => {
      const formData = {email, username, password, passwordAgain};
      props.onFormSubmit(formData);
    };

    return(
        <div class="RegisterForm">
            <form action="">
                <h1>Register</h1>
                <div class="input-box">
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <i class='bx bxs-envelope'></i>
                </div>
                <div class="input-box">
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <div class="input-box">
                <input type="password" placeholder="Repeat password" value={passwordAgain} onChange={(e) => setPasswordAgain(e.target.value)} required/>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <button type="button" className="btn" onClick={handleButtonClicked}>Register</button>
            </form>
        </div>
    );
}

export default RegisterForm