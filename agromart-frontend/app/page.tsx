import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface text-neutral-50 font-serif">
      {/* Nav */}
      <header className="sticky top-0 z-30 border-b border-surface-border bg-surface/95 backdrop-blur">
        <div className="flex items-center justify-between px-6 py-4 lg:px-12">
          <span className="text-xl font-bold text-primary-300">AgroMart</span>
          <nav className="hidden items-center gap-8 text-sm text-neutral-300 md:flex">
            <Link href="/products" className="hover:text-primary-300 text-lg">Marketplace</Link>
            <Link href="/products" className="hover:text-primary-300 text-lg">Categories</Link>
            <Link href="/register" className="hover:text-primary-300 text-lg">Sell on AgroMart</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden text-sm font-medium text-neutral-300 hover:text-primary-300 sm:block">
              Log in
            </Link>
            <Link
              href="/register"
              className="rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 text-center">
        {/* REPLACE THIS SRC with your own image link */}
        <img
          src="https://i.pinimg.com/1200x/a6/a4/6d/a6a46d0d4843ce8bdf279773c4ac238d.jpg"
          alt="Farmers in a field"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative max-w-4xl">
          <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
            Fertilizer Sourced Right,
            <br />
            Delivered Your Way
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-neutral-200">
            AgroMart connects farmers and distributors with trusted fertilizer
            sellers across Nigeria — browse listings, compare prices, and
            order directly on WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-lg bg-primary-700 px-7 py-3.5 text-base font-medium text-white transition hover:bg-primary-500"
            >
              Explore Marketplace →
            </Link>
            <Link
              href="#how-it-works"
              className="rounded-lg border border-neutral-300 px-7 py-3.5 text-base font-medium text-white transition hover:border-primary-300 hover:text-primary-300"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="px-6 py-20 lg:px-12">
        <h2 className="text-center text-3xl font-bold text-white">How It Works</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-neutral-400">
          Three simple steps — no complicated checkout, no middleman.
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
          {[
            { step: "1", title: "Browse", desc: "Search and filter fertilizer listings from verified sellers near you." },
            { step: "2", title: "Contact", desc: "Tap \u201cOrder via WhatsApp\u201d to message the seller directly." },
            { step: "3", title: "Receive", desc: "Agree on payment and delivery directly with the seller, your way." },
          ].map((s) => (
            <div key={s.step} className="rounded-xl border border-surface-border bg-surface-raised p-6 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary-700 text-sm font-bold text-white">
                {s.step}
              </div>
              <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Everything you need */}
      <section className="px-6 py-20 lg:px-12">
        <h2 className="text-center text-3xl font-bold text-white">
          Everything You Need to Succeed
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-neutral-400">
          AgroMart gives buyers and sellers the tools to trade fertilizer with confidence.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            { icon: "🛒", title: "Marketplace Access", desc: "Connect directly with buyers and sell your products at fair prices." },
            { icon: "💬", title: "WhatsApp Ordering", desc: "Order confirmation happens on a tool farmers already use every day." },
            { icon: "📦", title: "Product Listings", desc: "Sellers manage stock, pricing, and categories with full control." },
          ].map((f) => (
            <div key={f.title} className="rounded-xl border border-surface-border bg-surface-raised p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-900 text-lg">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose */}
     {/* Why choose */}
      <section className="px-6 py-20 lg:px-12">
        <h2 className="text-center text-3xl font-bold text-white">Why Choose AgroMart?</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-neutral-400">
          Built specifically for Nigerian farmers and distributors.
        </p>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-3">
          {[
            {
              image: "https://i.pinimg.com/736x/fb/e2/6a/fbe26ac388ed1e6b0c2b749aba0eb5ed.jpg",
              title: "Direct Communication",
              desc: "Talk straight to the seller — no hidden fees or middlemen.",
            },
            {
              image: "https://i.pinimg.com/1200x/2c/8b/25/2c8b25b72b029df0399e2637a2e6f8cb.jpg",
              title: "Community Focused",
              desc: "Built around how Nigerian farmers and sellers already work.",
            },
            {
              image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
              title: "Built to Grow",
              desc: "A simple foundation today, ready for payments and tracking tomorrow.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="overflow-hidden rounded-xl border border-surface-border bg-surface-raised"
            >
              {/* REPLACE THIS SRC with your own image link */}
              <img
                src={f.image}
                alt={f.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-white">{f.title}</h3>
                <p className="mt-1 text-sm text-neutral-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / mailing-list style strip */}
      <div className=" max-w-5xl max-h-52 bg-green-800 flex justify-center mx-auto rounded-2xl">
        <section className="px-6 py-20 text-center lg:px-12 mt-[-44px]">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="mx-auto mt-2 max-w-md text-neutral-200">
            Create your free account and start browsing fertilizer listings today.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              href="/register"
              className="rounded-lg bg-primary-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-primary-500"
            >
              Create your account
            </Link>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-surface-border px-6 py-12 lg:px-12 mt-10">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary-700 text-sm">
                🌱
              </span>
              <span className="text-lg font-bold tracking-wide text-white">
                AGROMART
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-neutral-500">
              Nigeria&apos;s marketplace connecting fertilizer sellers with
              farmers, distributors, and cooperatives.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
              Platform
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-500">
              <li><Link href="/products" className="hover:text-primary-300">Marketplace</Link></li>
              <li><Link href="/register" className="hover:text-primary-300">Sell on AgroMart</Link></li>
              <li><Link href="/login" className="hover:text-primary-300">Log in</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-primary-300">About</Link></li>
              <li><Link href="#how-it-works" className="hover:text-primary-300">How It Works</Link></li>
              <li><Link href="#" className="hover:text-primary-300">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-300">
              Legal
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-neutral-500">
              <li><Link href="#" className="hover:text-primary-300">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary-300">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 max-w-6xl border-t border-surface-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} AgroMart Platform. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-neutral-400">
              <a href="#" aria-label="LinkedIn" className="hover:text-primary-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 10.27h-3v-4.5c0-1.07-.02-2.45-1.5-2.45-1.5 0-1.73 1.17-1.73 2.37v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-primary-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.92h-2.4v-2.88H10V9.41c0-2.37 1.41-3.68 3.58-3.68 1.04 0 2.12.18 2.12.18v2.62h-1.32c-1.3 0-1.7.81-1.7 1.64v1.95h2.9l-.46 2.88h-2.44V21.8c4.56-.93 8-4.96 8-9.8z" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="hover:text-primary-300">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.9 2H22l-7.2 8.23L23 22h-7.1l-5.5-7.1L4 22H1l7.7-8.8L1 2h7.2l5 6.6L18.9 2zm-2.5 18h1.9L8.7 4H6.7l9.7 16z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
