import React, { useState } from "react";

export const Register = (props) => {
    const [firstName, setFirstName] = useState(' ');
    const [lastName, setLastName] = useState(' ');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="reg-form-container">
            <h3 className="form-header">Register</h3>

            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                    type="firstName" 
                    placeholder="First Name"
                    id="firstName"
                    name="firstName"
                    > 
                </input>

                <label htmlFor="lastName">Last Name</label>
                <input
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                    type="lastName" 
                    placeholder="last name"
                    id="lastName"
                    name="lastName"
                    > 
                </input>

                <label htmlFor="email">Email</label>
                <input
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="email"
                    id="email"
                    name="email"
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

                <button className="submit-button" type="submit">Register</button>
            </form>
            <button 
                className="link-btn" 
                onClick={() => props.onFormSwitch('login')}
                >
                  Have an account? Log in here.  
                </button>
        </div>
    )
}