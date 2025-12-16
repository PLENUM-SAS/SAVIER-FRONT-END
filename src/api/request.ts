export class ApiError extends Error {
  status: number;
  body?: string;

  constructor(status: number, message: string, body?: string) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.body = body;
  }
}

const API_BASE =
  import.meta.env.VITE_API_URL?.replace(/\/+$/, "") ||
  "https://savier-back-end-production.up.railway.app";

// Si quieres centralizar prefijo tipo "/api", déjalo aquí.
// Si tus endpoints YA incluyen "/api" en el path, ponlo vacío.
const API_PREFIX = ""; // ej: "/api"

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown; // nosotros serializamos JSON si es objeto
  token?: string | null; // por si quieres pasar token manual en casos raros
};

function joinUrl(base: string, path: string) {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${API_PREFIX}${p}`;
}

export async function request<T = unknown>(
  path: string,
  options: RequestOptions = {}
): Promise<T> {
  const token = options.token ?? localStorage.getItem("token");

  const headers = new Headers(options.headers);

  // Si body es objeto, lo mandamos como JSON automáticamente
  const hasBody = options.body !== undefined && options.body !== null;
  const isJsonBody =
    hasBody && typeof options.body === "object" && !(options.body instanceof FormData);

  if (isJsonBody && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(joinUrl(API_BASE, path), {
    ...options,
    headers,
    body: isJsonBody ? JSON.stringify(options.body) : (options.body as BodyInit | null | undefined),
  });

  // Manejo de errores consistente
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new ApiError(res.status, `HTTP ${res.status} ${res.statusText}`, text || undefined);
  }

  // 204 No Content
  if (res.status === 204) return null as T;

  const contentType = res.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return (await res.json()) as T;
  }

  // fallback (texto)
  return (await res.text()) as T;
}
