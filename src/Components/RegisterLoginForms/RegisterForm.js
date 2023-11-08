import React from "react"
import "./RegisterForm.css"

function RegisterForm(){
    return(
        <div class="RegisterForm">
            <form action="">
                <h1>Register</h1>
                <div class="input-box">
                    <input type="text" placeholder="Email" required/>
                    <i class='bx bxs-envelope'></i>
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Username" required/>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Repeat password" required/>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <button type="submit" class="btn">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm