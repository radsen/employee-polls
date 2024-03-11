import "./login.css";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/login";

const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({email: email, password: password}));
    };

    return(
        <div className="auth">
            <form className="auth-form" onSubmit={ (e) => handleSubmit(e) }>
                <h1>Login</h1>
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
                <button type="submit" className="auth-submit-btn">
                    Submit
                </button>
                <div className="auth-extras">
                    <Link to="forgot" className="forgot-password">Forgot password</Link>
                    <Link to="signup" className="signup">Sign Up</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;