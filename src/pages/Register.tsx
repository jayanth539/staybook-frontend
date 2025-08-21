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
    <div className="p-6 max-w-sm mx-auto bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2 rounded"
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value as "CUSTOMER" | "ADMIN")}
        className="border p-2 w-full mb-2 rounded"
      >
        <option value="CUSTOMER">Customer</option>
        <option value="ADMIN">Admin</option>
      </select>
      <button
        onClick={handleRegister}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Register
      </button>
    </div>
  );
}
