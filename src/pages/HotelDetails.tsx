import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import http from "../api/http";
import { useAuth } from "../context/AuthContext";
import "../styles/layout.css";

export default function HotelDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const { user } = useAuth();

  const [hotel, setHotel] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [bookingBusy, setBookingBusy] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setErr(null);
        setLoading(true);
        const { data } = await http.get(`/hotels/${id}`);
        setHotel(data);
      } catch (e: any) {
        setErr(e?.response?.data?.message || "Failed to load hotel");
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  async function book() {
    if (!user) return nav(`/login?next=/hotels/${id}`);
    try {
      setBookingBusy(true);
      await http.post("/bookings", {
        hotelId: Number(id),
        checkIn: "2025-09-01",
        checkOut: "2025-09-03",
        guests: 2,
      });
      nav("/bookings");
    } catch (e: any) {
      alert(e?.response?.data?.message || "Booking failed");
    } finally {
      setBookingBusy(false);
    }
  }

  return (
    <div className="page-wrapper">
      <div className="page-card">
        {loading && <p>Loading…</p>}
        {err && <p className="error">{err}</p>}
        {!loading && !err && hotel && (
          <>
            <h2>{hotel.name}</h2>
            <p>{hotel.city}</p>
            <p>₹{hotel.price}/night</p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
              <button className="btn primary" onClick={book} disabled={bookingBusy}>
                {bookingBusy ? "Booking…" : "Book this hotel"}
              </button>
              <button className="btn" onClick={() => nav(-1)}>Back</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
