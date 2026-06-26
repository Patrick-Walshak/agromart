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
    <main className="grid min-h-screen lg:grid-cols-2 font-serif">
      {/* Left panel — image, dimmed */}
      <div className="relative hidden overflow-hidden lg:block">
        {/* REPLACE THIS SRC with your own image link */}
        <img
          src="https://i.pinimg.com/1200x/fd/68/3d/fd683dd7499cac0ab38fa5ba8a69031b.jpg"
          alt="Farm"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dim overlay */}
        <div className="absolute inset-0 bg-primary-900/55" />

        {/* Overlay content */}
        <div className="relative flex h-full flex-col justify-between p-10 text-white">
          <span className="text-4xl font-bold tracking-tight">AgroMart</span>
          <div>
            <p className="max-w-sm text-2xl font-medium leading-snug">
              Fertilizer, sourced and sold the way farmers actually work —
              one WhatsApp message away.
            </p>
            <p className="mt-4 text-sm text-primary-100">
              Built for farmers, distributors, and sellers across Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex items-center justify-center bg-primary-400 px-6 py-12">
        <div className="w-full max-w-sm">
          <p className="text-3xl font-semibold uppercase tracking-wide text-primary-700 lg:hidden">
            AgroMart
          </p>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-700 mt-6">
            Join AgroMart
          </p>
          <h1 className="mt-1 text-2xl font-bold text-neutral-300">
            Create your account
          </h1>
          <p className="mt-1 text-lg text-neutral-300">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-primary-700 hover:underline">
              Log in
            </a>
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-lg font-medium text-neutral-300">First name</label>
                <input
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
                />
              </div>
              <div>
                <label className="text-lg font-medium text-neutral-300">Last name</label>
                <input
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
                />
              </div>
            </div>

            <div>
              <label className="text-lg font-medium text-neutral-300">Email address</label>
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
              <label className="text-lg font-medium text-neutral-300">Phone number</label>
              <input
                name="phone_number"
                value={form.phone_number}
                onChange={handleChange}
                required
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="text-lg font-medium text-neutral-300">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                placeholder="At least 8 characters"
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="text-lg font-medium text-neutral-300">I am a</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm outline-none focus:border-primary-500"
              >
                <option value="buyer">Buyer (farmer / distributor)</option>
                <option value="seller">Seller (fertilizer supplier)</option>
              </select>
            </div>

            {error && (
              <p className="rounded-lg bg-error/10 px-3 py-2 text-sm text-error">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-primary-700 py-2.5 text-lg font-medium text-white transition hover:bg-primary-900 disabled:opacity-60"
            >
              {loading ? "Creating account..." : "Create My Account"}
            </button>

            <p className="text-center text-lg text-neutral-300">
              Your information is kept private and is never sold to third parties.
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}