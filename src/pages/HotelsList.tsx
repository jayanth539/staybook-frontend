import { useEffect, useState } from "react";
import http from "../api/http";
import "../styles/layout.css";

type Hotel = {
  id: number;
  name: string;
  city: string;
  price: number;
  thumbnailUrl?: string;
};

export default function HotelsList() {
  const [items, setItems] = useState<Hotel[]>([]);
  const [q, setQ] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function fetchHotels(city?: string) {
    try {
      setErr(null);
      setLoading(true);
      const { data } = await http.get("/hotels", {
        params: { city: city || undefined, page: 0, size: 20 },
      });
      setItems(data?.content ?? data ?? []);
    } catch (e: any) {
      setErr(e?.response?.data?.message || "Failed to load hotels");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchHotels();
  }, []);

  return (
    <div className="page-wrapper">
      <div className="page-card">
        <h2>🏨 Browse Hotels</h2>

        <div className="toolbar" style={{ display: "flex", gap: "0.5rem" }}>
          <input
            placeholder="Search by city"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <button className="btn" onClick={() => fetchHotels(q)}>
            Search
          </button>
          <button className="btn" onClick={() => { setQ(""); fetchHotels(); }}>
            Reset
          </button>
        </div>

        {loading && <p>Loading…</p>}
        {err && <p className="error">{err}</p>}

        {!loading && !err && (
          <div
            className="grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {items.map((h) => (
              <a key={h.id} className="card" href={`/hotels/${h.id}`}>
                {h.thumbnailUrl && (
                  <img
                    src={h.thumbnailUrl}
                    alt={h.name}
                    style={{ width: "100%", height: 140, objectFit: "cover", borderRadius: "8px" }}
                  />
                )}
                <div style={{ marginTop: "0.5rem" }}>
                  <h3 style={{ margin: 0 }}>{h.name}</h3>
                  <p style={{ margin: "0.25rem 0" }}>{h.city}</p>
                  <strong>₹{h.price}/night</strong>
                </div>
              </a>
            ))}
            {items.length === 0 && <p>No hotels found.</p>}
          </div>
        )}
      </div>
    </div>
  );
}
