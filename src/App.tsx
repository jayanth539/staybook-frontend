// src/App.tsx
import Navbar from "./components/Navbar";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f8fafc",
      }}
    >
      <Navbar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
