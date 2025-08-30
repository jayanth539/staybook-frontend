import { useEffect, useState } from "react";
import http from "../api/http";
import "../styles/layout.css";

type Booking = {
  id: number;
  hotelName: string;
  checkInDate: string;   // ISO date
  checkOutDate: string;  // ISO date
  total?: number;
  username?: string;
};

export default function MyBookings() {
  const [rows, setRows] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setErr(null);
        setLoading(true);
        const { data } = await http.get("/bookings/me");
        console.log(import.meta.env.VITE_API_BASE)
        console.log("Bookings API response:", data);
        setRows(Array.isArray(data) ? data : []);
      } catch (e: any) {
        setErr(e?.response?.data?.message || "Failed to load bookings");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-card">
        <h2>🧾 My Bookings</h2>
        {loading && <p>Loading…</p>}
        {err && <p className="error">{err}</p>}
        {!loading && !err && rows.length === 0 && <p>No bookings yet.</p>}
        {!loading && !err && Array.isArray(rows) && rows.length > 0 && (
          <ul className="list" style={{ display: "grid", gap: "0.5rem", padding: 0 }}>
            {rows.map((b) => (
              <li
                key={b.id}
                style={{
                  listStyle: "none",
                  border: "1px solid var(--color-border, #ddd)",
                  borderRadius: "10px",
                  padding: "0.75rem",
                }}
              >
                <strong>{b.hotelName}</strong>
                <div>{b.checkInDate} → {b.checkOutDate}</div>
                <div>₹{b.total}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
