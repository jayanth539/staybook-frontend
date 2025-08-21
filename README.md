# StayBook Frontend

StayBook Frontend is a **React-based web application** for a hotel booking system.  
It provides an intuitive UI for customers to **search hotels, book rooms, manage bookings**, and for admins to **manage hotels and users**.  

This frontend connects with the [StayBook Backend](https://github.com/jayanth539/staybook) (Spring Boot + PostgreSQL + JWT).

---

## 🚀 Features
- User Registration & Login (JWT-based authentication)
- Role-based UI (Customer / Admin)
- Hotel Search & Booking
- Manage Bookings (view / cancel)
- Admin Dashboard for hotel & user management
- API integration with backend via Axios

---

## 🛠 Tech Stack
- **React** (Vite for fast builds)
- **Axios** (API communication)
- **React Router** (navigation)
- **TailwindCSS / MUI** (UI styling)
- **Context API** (auth & global state)

---

## 📦 Installation & Setup

### 1. Clone the repository
```sh
git clone https://github.com/jayanth539/staybook-frontend.git
cd staybook-frontend
```

### 2. Install dependencies
```sh
npm install
```

### 3. Start the development server
```sh
npm run dev
```

This will start the app at http://localhost:5173

## API Integration

By default, the frontend expects the backend to run at:
```sh
http://localhost:8080
```