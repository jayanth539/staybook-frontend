import { useState } from "react";
import "../styles/layout.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logging in as ${username}`);
  };

  return (
    <div className="page-wrapper">
      <div className="page-card">
        <h2>🔐 Login Page</h2>
        <p>This is a placeholder for the Login page.</p>

        <form onSubmit={handleLogin} className="form-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
          <button
            type="button"
            onClick={() => {
              setUsername("");
              setPassword("");
            }}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
