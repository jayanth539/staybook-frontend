import { useState } from "react";
import { registerUser } from "../api/auth";

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
        padding: "1rem",
      }}
    >
      <form
        onSubmit={e => { e.preventDefault(); handleRegister(); }}
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          padding: "2rem",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: 8, fontWeight: 700, fontSize: "1.5rem" }}>
          <span role="img" aria-label="register">📝</span> Register Page
        </h2>
        <p style={{ textAlign: "center", marginBottom: 16, color: "#555" }}>
          This is a placeholder for the Register page.
        </p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value as "CUSTOMER" | "ADMIN")}
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 6,
            border: "1px solid #ccc",
            fontSize: "1rem",
            boxSizing: "border-box",
            marginBottom: 4,
          }}
        >
          <option value="CUSTOMER">Customer</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px 0",
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            marginBottom: 4,
            transition: "background 0.2s",
          }}
        >
          Register
        </button>
        <button
          type="button"
          style={{
            width: "100%",
            padding: "10px 0",
            background: "#e5e7eb",
            color: "#222",
            border: "none",
            borderRadius: 6,
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
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
  );
}
