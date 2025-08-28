import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../styles/layout.css";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();

  function doLogout() {
    logout();
    if (loc.pathname.startsWith("/bookings")) nav("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a className="brand" href="/">StayBook</a>

        <NavLink
          to="/hotels"
          className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
        >
          🏨 Hotels
        </NavLink>

        {user && (
          <NavLink
            to="/bookings"
            className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
          >
            🧾 My Bookings
          </NavLink>
        )}
      </div>

      <div className="navbar-right">
        {!user ? (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
            >
              🔑 Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) => `navlink ${isActive ? "active" : ""}`}
            >
              📝 Register
            </NavLink>
          </>
        ) : (
          <div className="userbox">
            <span className="muted">
              Hi, {user.name ?? (user as any).email ?? "User"}
            </span>
            <button className="btn" onClick={doLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}
