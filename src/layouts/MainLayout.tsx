import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/layout.css";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </>
  );
}
