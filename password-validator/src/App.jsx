import { useState } from "react";
import "./App.css";
import validator from "validator";

function App() {
    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState("");

    function validate(value) {
        setPassword(value);
        if (
            validator.isStrongPassword(value, {
                minLength: 8,
                minLowercase: 1,
                minUppercase: 1,
                minNumbers: 1,
                minSymbols: 1
            })
        ) {
            setErrorMessage("Strong Password ✅");
        } else {
            setErrorMessage("Weak Password ❌");
        }
    }

    return (
        <div className="app-container">
            <h2>Password Strength Checker</h2>
            <input
                type="text"
                className="password-input"
                value={password}
                onChange={(e) => validate(e.target.value)}
                placeholder="Enter your password"
            />
            {errorMessage && (
                <div
                    className={`message ${
                        errorMessage.includes("Weak") ? "weak" : "strong"
                    }`}
                >
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default App;
