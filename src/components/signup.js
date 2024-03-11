import { useState } from "react";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="auth">
            <form className="auth-form" onSubmit={ (e) => handleSubmit(e) }>
                <h1>Sign Up</h1>
                <input
                    id="name"
                    type="name"
                    placeholder="Enter your Name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your E-mail"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                    id="password"
                    type="password"
                    placeholder="Type password"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <input
                    id="confirmation"
                    type="password"
                    placeholder="Confirm password"
                    value={ confirmation }
                    onChange={ (e) => setConfirmation(e.target.value) }
                />
                <button id="signUpBtn" type="submit" className="auth-submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUp;