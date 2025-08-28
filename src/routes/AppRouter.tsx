// src/routes/AppRouter.tsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

import HotelsList from "../pages/HotelsList";
import HotelDetails from "../pages/HotelDetails";
import MyBookings from "../pages/MyBookings";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "./../routes/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        {/* New public pages */}
        <Route path="hotels" element={<HotelsList />} />
        <Route path="hotels/:id" element={<HotelDetails />} />

        {/* Protected pages */}
        <Route element={<ProtectedRoute />}>
          <Route path="bookings" element={<MyBookings />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
