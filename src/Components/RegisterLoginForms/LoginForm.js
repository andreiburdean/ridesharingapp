import React from "react"
import "./LoginForm.css"

function LoginForm(){
    return(
        <div class="LoginForm">
            <form action="">
                <h1>Login</h1>
                <div class="input-box">
                    <input type="text" placeholder="Username" required/>
                    <i class='bx bxs-user'></i>
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i class='bx bxs-lock-alt'></i>
                </div>
                <div class="remember-forget">
                    <label><input type="checkbox"/> Remember me</label>
                    <a href="www.google.com">Forgot password?</a>
                </div>
                <button type="submit" class="btn">Login</button>
                <div class="register-link">
                    <p>Don't have  an account? <a href="www.google.com">Register</a></p>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;