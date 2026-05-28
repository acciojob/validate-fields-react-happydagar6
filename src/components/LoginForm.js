import React, { useState, useEffect } from "react"; 

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (username.trim() !== "" && password.trim() !== "") {
            setErrorMessage("");
        }
    }, [username, password]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === "" || password.trim() === "") {
            setErrorMessage("Both fields are required.");
        } else {
            setErrorMessage("");
            console.log("Login successful!");
        }
    };

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <form onSubmit={handleSubmit} style={{ display:  "flex", flexDirection: "column", gap: "10px" }}>
        <div>
            <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
                Username:
            </label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
                Password:
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit">Login</button>
      </form>

      {errorMessage && (
        <p id="errorMessage" style={{color: "red", marginTop: "10px" }}>
            {errorMessage}
        </p>
      )}
    </div>
  )
}

export default LoginForm
