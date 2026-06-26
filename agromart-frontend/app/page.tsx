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
      <section className="px-6 py-20 lg:px-12">
        <h2 className="text-center text-3xl font-bold text-white">Why Choose AgroMart?</h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-neutral-400">
          Built specifically for Nigerian farmers and distributors.
        </p>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-3">
          {[
            { icon: "🔒", title: "Direct Communication", desc: "Talk straight to the seller — no hidden fees or middlemen." },
            { icon: "🤝", title: "Community Focused", desc: "Built around how Nigerian farmers and sellers already work." },
            { icon: "📈", title: "Built to Grow", desc: "A simple foundation today, ready for payments and tracking tomorrow." },
          ].map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-900 text-xl">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-white">{f.title}</h3>
              <p className="mt-1 text-sm text-neutral-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / mailing-list style strip */}
      <section className="px-6 py-20 text-center lg:px-12">
        <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
        <p className="mx-auto mt-2 max-w-md text-neutral-400">
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

      {/* Footer */}
      <footer className="border-t border-surface-border px-6 py-10 lg:px-12">
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
          <div>
            <span className="text-lg font-bold text-primary-300">AgroMart</span>
            <p className="mt-2 text-sm text-neutral-500">
              Nigeria&apos;s marketplace connecting fertilizer sellers with farmers
              and distributors.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Platform
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-500">
              <li><Link href="/products" className="hover:text-primary-300">Marketplace</Link></li>
              <li><Link href="/register" className="hover:text-primary-300">Sell on AgroMart</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
              Account
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-500">
              <li><Link href="/login" className="hover:text-primary-300">Log in</Link></li>
              <li><Link href="/register" className="hover:text-primary-300">Create account</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-neutral-600">
          © {new Date().getFullYear()} AgroMart. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
