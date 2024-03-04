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
                    type="name"
                    placeholder="Enter your Name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    type="email"
                    placeholder="Enter your E-mail"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                    type="password"
                    placeholder="Type password"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <input
                    type="confirmation"
                    placeholder="Confirm password"
                    value={ confirmation }
                    onChange={ (e) => setConfirmation(e.target.value) }
                />
                <button type="submit" className="auth-submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default SignUp;