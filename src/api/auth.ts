// src/api/auth.ts
import api from "./axios";
import type { UserRequest, UserResponse } from "../types/api";

export async function registerUser(
  data: UserRequest
): Promise<UserResponse> {
  const response = await api.post<UserResponse>("/auth/register", data);
  return response.data;
}

export async function loginUser(
  username: string,
  password: string
): Promise<{ token: string }> {
  const response = await api.post<{ token: string }>("/auth/login", {
    username,
    password,
  });
  return response.data;
}
