// src/types/api.ts

export interface UserRequest {
  username: string;
  password: string;
  role?: "CUSTOMER" | "ADMIN";
}

export interface UserResponse {
  id: number;
  username: string;
  role: string;
}

export interface HotelResponse {
  id: number;
  name: string;
  location: string;
  pricePerNight: number;
}
