const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form className="login-form" onSubmit={ (e) => handleSubmit(e) }>
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Enter your E-mail"
                    value={ email }
                    onChange={ (e) => setEmail(e.target.value) }
                />
                <input
                    type="password"
                    placeholder="Type new password"
                    value={ password }
                    onChange={ (e) => setPassword(e.target.value) }
                />
                <input
                    type="password"
                    placeholder="Confirm new password"
                    value={ confirmation }
                    onChange={ (e) => setConfirmation(e.target.value) }
                />
                <button type="submit" className="submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;