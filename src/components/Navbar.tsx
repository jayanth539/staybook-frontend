// src/components/Navbar.tsx
import { NavLink } from "react-router-dom";
import "../styles/layout.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink 
            to="/" 
            end 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🏠 Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/register" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            📝 Register
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            🔑 Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
