import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";
import "./styles/layout.css";

function App() {
  return (
    <div className="app-container">
      <Navbar /> {/* fixed on top */}
      <div className="app-content">
        <AppRouter /> {/* centered pages */}
      </div>
    </div>
  );
}

export default App;
