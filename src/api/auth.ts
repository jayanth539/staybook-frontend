// src/api/auth.ts
import api from "./axios";

export type Role = "CUSTOMER" | "ADMIN";

export type RegisterRequest = {
  username: string;
  password: string;
  role: Role;
};

export type RegisterResponse = {
  id?: number;
  username: string;
  role?: Role;
};

export type LoginResponse = { token: string };

/**
 * Backend expects:
 * POST /api/users
 * {
 *   "username": "king",
 *   "password": "password",
 *   "role": "CUSTOMER"
 * }
 */
export async function registerUser(
  data: RegisterRequest
): Promise<RegisterResponse> {
  const res = await api.post<RegisterResponse>("/api/users", data);
  return res.data;
}

/**
 * Backend expects:
 * POST /auth/login
 * {
 *   "username": "king",
 *   "password": "password"
 * }
 * -> { "token": "..." }
 */
export async function loginUser(
  username: string,
  password: string
): Promise<LoginResponse> {
  console.log("Attempting login POST", username, password);
  const res = await api.post<LoginResponse>("/auth/login", { username, password });
  console.log("Login POST response", res);
  return res.data;
}
