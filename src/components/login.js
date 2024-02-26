import { useState } from "react";

import "./login.css";

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return(
        <div className="login">
            <form className="login-form" onSubmit={ (e) => handleSubmit(e) }>
                <h1>Login</h1>
                <input
                    type="name"
                    placeholder="Name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;