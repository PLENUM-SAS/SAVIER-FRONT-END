import { request } from "./request";

// Tipos (ajusta según tu Swagger)
export type LoginRequest = { email: string; password: string };
export type LoginResponse = { token: string }; // o accessToken, etc.

export type Product = { id: number; name: string; price: number };
export type CreateProductRequest = { name: string; price: number };

// Auth
export const authApi = {
  login: (payload: LoginRequest) =>
    request<LoginResponse>("/api/auth/login", {
      method: "POST",
      body: payload,
    }),

  register: (payload: unknown) =>
    request("/api/auth/register", {
      method: "POST",
      body: payload,
    }),
};

// Products
export const productsApi = {
  list: () => request<Product[]>("/api/products"),

  create: (payload: CreateProductRequest) =>
    request<Product>("/api/products", {
      method: "POST",
      body: payload,
    }),
};



