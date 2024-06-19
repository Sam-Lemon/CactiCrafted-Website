import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="log-form-container">
            <h3 className="form-header">Login</h3>

            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="email"
                    id="password"
                    name="password"
                    >
                </input>

                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    >
                </input>

                <button
                    className="link-btn"
                    onClick={() =>props.onFormSwitch('register')}
                    >Don't have an account? Register here!
                </button>
            </form>
        </div>
    );
}