// src/components/Navbar.tsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f8f9fa" }}>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>
          <Link to="/register">📝 Register</Link>
        </li>
        <li>
          <Link to="/login">🔑 Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
