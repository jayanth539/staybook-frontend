import { useState } from "react";
import { registerUser } from "../api/auth";
import "../styles/layout.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"CUSTOMER" | "ADMIN">("CUSTOMER");

  const handleRegister = async () => {
    try {
      const user = await registerUser({ username, password, role });
      alert(`Registered successfully: ${user.username}`);
    } catch (err) {
      console.error(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="page-wrapper">
      <div className="page-card">
        <h2>📝 Register Page</h2>
        <p>This is a placeholder for the Register page.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister();
          }}
          className="form-container"
        >
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
          <select
            value={role}
            onChange={(e) => setRole(e.target.value as "CUSTOMER" | "ADMIN")}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit">Register</button>
          <button
            type="button"
            onClick={() => {
              setUsername("");
              setPassword("");
              setRole("CUSTOMER");
            }}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}
