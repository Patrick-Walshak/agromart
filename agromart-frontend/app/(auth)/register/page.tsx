"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "@/lib/api";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
    role: "buyer" as "buyer" | "seller",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await registerUser(form);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-primary-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-primary-900">Create your account</h1>
        <p className="mt-1 text-sm text-neutral-500">
          Join AgroMart to buy or sell fertilizer products.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <input
              name="first_name"
              placeholder="First name"
              value={form.first_name}
              onChange={handleChange}
              required
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
            />
            <input
              name="last_name"
              placeholder="Last name"
              value={form.last_name}
              onChange={handleChange}
              required
              className="rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
            />
          </div>

          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
          />

          <input
            name="phone_number"
            placeholder="Phone number"
            value={form.phone_number}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={8}
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
          />

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
          >
            <option value="buyer">I'm a buyer (farmer/distributor)</option>
            <option value="seller">I'm a seller (fertilizer supplier)</option>
          </select>

          {error && (
            <p className="rounded-lg bg-error/10 px-3 py-2 text-sm text-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary-700 py-2.5 text-sm font-medium text-white transition hover:bg-primary-900 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-neutral-500">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-primary-700 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </main>
  );
}
