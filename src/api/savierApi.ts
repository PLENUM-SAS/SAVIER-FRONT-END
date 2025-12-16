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
    request<LoginResponse>("/api/auth/register", {
      method: "POST",
      body: payload,
    }),

  registerAdmin: (payload: unknown) =>
    request<LoginResponse>("/api/auth/register-admin", {
      method: "POST",
      body: payload,
    }),
};

// Restaurants
export type Restaurant = {
  id: string;
  commercialName: string; // Changed from name
  description: string;
  cuisineType: string;
  averageRating: number;
  status: string;
  ownerId: string;
  // Missing in DTO but used in UI (will use optionals/defaults)
  address?: string;
  phone?: string;
  imageUrl?: string;
};

export const restaurantsApi = {
  getAll: () => request<Restaurant[]>("/api/restaurants"),

  getById: (id: string) => request<Restaurant>(`/api/restaurants/${id}`),

  getMyRestaurants: () => request<Restaurant[]>("/api/restaurants/my-restaurants"),

  create: (payload: unknown) =>
    request<Restaurant>("/api/restaurants", {
      method: "POST",
      body: payload,
    }),

  update: (id: string, payload: unknown) =>
    request(`/api/restaurants/${id}`, {
      method: "PUT",
      body: payload,
    }),

  delete: (id: string) =>
    request(`/api/restaurants/${id}`, {
      method: "DELETE",
    }),
};

// Products
export const productsApi = {
  list: () => request<Product[]>("/api/products"),

  getByRestaurant: (restaurantId: string) =>
    request<Product[]>(`/api/products/restaurant/${restaurantId}`),

  create: (payload: CreateProductRequest) =>
    request<Product>("/api/products", {
      method: "POST",
      body: payload,
    }),

  update: (id: number | string, payload: unknown) =>
    request(`/api/products/${id}`, {
      method: "PUT",
      body: payload,
    }),

  delete: (id: number | string) =>
    request(`/api/products/${id}`, {
      method: "DELETE",
    }),
};

// Surplus Packs
export type SurplusPack = {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  offerPrice: number; // Changed from discountPrice
  stock: number; // Changed from quantity
  status: string;
  packType: string;
  availableDate: string;
  pickupStartTime: string;
  pickupEndTime: string;
  branchId: string;
  branchName: string;
  branchAddress: string;
  restaurantId: string;
  restaurantName: string;
  contains: string[];
  imageUrl?: string;
};

export const surplusPacksApi = {
  getAvailable: () => request<SurplusPack[]>("/api/surpluspacks"),

  getById: (id: string) => request<SurplusPack>(`/api/surpluspacks/${id}`),

  getByBranch: (branchId: string) => request<SurplusPack[]>(`/api/surpluspacks/branch/${branchId}`),

  create: (payload: unknown) =>
    request<SurplusPack>("/api/surpluspacks", {
      method: "POST",
      body: payload,
    }),

  update: (id: string, payload: unknown) =>
    request(`/api/surpluspacks/${id}`, {
      method: "PUT",
      body: payload,
    }),

  delete: (id: string) =>
    request(`/api/surpluspacks/${id}`, {
      method: "DELETE",
    }),
};

// Orders
export type Order = {
  id: string;
  totalAmount: number;
  status: string; // 'Pending', 'Completed', etc.
  pickupCode: string;
  createdAt: string;
  items: Array<{
    id: string;
    productName: string;
    quantity: number;
    unitPrice: number;
  }>;
};

export const ordersApi = {
  create: (payload: { items: Array<{ surplusPackId?: string; productId?: string; quantity: number }> }) =>
    request<Order>("/api/orders", {
      method: "POST",
      body: payload,
    }),

  getMyOrders: () => request<Order[]>("/api/orders/my-orders"),

  completePickup: (payload: { pickupCode: string; branchId: string }) =>
    request("/api/orders/complete-pickup", {
      method: "POST",
      body: payload,
    }),
};



