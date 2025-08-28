// src/pages/Login.tsx
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/layout.css";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // optional: if already logged in, redirect from login page
  useEffect(() => {
    // no-op: rely on ProtectedRoute elsewhere
  }, []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
       console.log("Calling login with", username, password);
      await login(username, password);
      const params = new URLSearchParams(loc.search);
      const next = params.get("next");
      nav(next || "/");
    } catch (e: any) {
      setErr(e?.response?.data?.message || "Login failed");
    } finally {
      setBusy(false);
    }
  }

  function clear() {
    setUsername("");
    setPassword("");
    setErr(null);
  }

  return (
    <div className="page-wrapper">
      <div className="page-card">
        <h2>🔐 Login</h2>
        <form onSubmit={handleLogin} className="form-container">
          <input
            type="text"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {err && <p className="error">{err}</p>}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button type="submit" className="btn primary" disabled={busy}>
              {busy ? "Logging in…" : "Login"}
            </button>
            <button type="button" className="btn" onClick={clear}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  );
}