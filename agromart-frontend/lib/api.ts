const API_URL = process.env.NEXT_PUBLIC_API_URL;

export interface RegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  role: "buyer" | "seller";
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  token_type: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    role: "buyer" | "seller";
    is_active: boolean;
    created_at: string;
    updated_at: string | null;
  };
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const data = await res.json().catch(() => null);
    const message = data?.detail || "Something went wrong. Please try again.";
    throw new Error(message);
  }
  return res.json();
}

export async function registerUser(payload: RegisterPayload): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleResponse<AuthResponse>(res);
}

export async function loginUser(payload: LoginPayload): Promise<AuthResponse> {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleResponse<AuthResponse>(res);
}
