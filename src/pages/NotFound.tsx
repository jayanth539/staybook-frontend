import "../styles/layout.css";

export default function NotFound() {
  return (
    <div className="page-wrapper">
      <div className="page-card">
        <h2>404 — Not Found</h2>
        <p>We couldn’t find that page.</p>
        <a className="btn" href="/">Go Home</a>
      </div>
    </div>
  );
}
