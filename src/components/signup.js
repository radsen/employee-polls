const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form className="login-form" onSubmit={ (e) => handleSubmit(e) }>
                <h1>Login</h1>
                <input
                    type="name"
                    placeholder="Enter your Name"
                    value={ name }
                    onChange={ (e) => setName(e.target.value) }
                />
                <input
                    type="email"
                    placeholder="Enter your E-mail"
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

export default SignUp;