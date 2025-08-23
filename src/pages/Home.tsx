// src/pages/Home.tsx
const Home = () => {
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
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          borderRadius: 12,
          boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
          padding: "2rem",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: 8 }}>🏨 Home Page</h1>
        <p style={{ color: "#555" }}>This is the Home page. Welcome to StayBook!</p>
      </div>
    </div>
  );
};

export default Home;
