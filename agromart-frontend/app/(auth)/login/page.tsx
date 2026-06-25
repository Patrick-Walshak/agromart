"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/api";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await loginUser(form);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      router.push("/products");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="grid min-h-screen lg:grid-cols-2">
      {/* Left panel — image, dimmed */}
      <div className="relative hidden overflow-hidden lg:block">
        {/* REPLACE THIS SRC with your own image link */}
        <img
          src="https://i.pinimg.com/1200x/fd/68/3d/fd683dd7499cac0ab38fa5ba8a69031b.jpg"
          alt="Farm"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-primary-900/55" />

        <div className="relative flex h-full flex-col justify-between p-10 text-white">
          <span className="text-lg font-bold tracking-tight">AgroMart</span>
          <div>
            <p className="max-w-sm text-2xl font-medium leading-snug">
              Welcome back. Pick up right where you left off.
            </p>
            <p className="mt-4 text-sm text-primary-100">
              Built for farmers, distributors, and sellers across Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
            Welcome back
          </p>
          <h1 className="mt-1 text-2xl font-bold text-neutral-900">
            Log in to your account
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Don&apos;t have an account?{" "}
            <a href="/register" className="font-medium text-primary-700 hover:underline">
              Create one
            </a>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-neutral-700">Email address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-neutral-700">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
              />
            </div>

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
              {loading ? "Logging in..." : "Log in"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
