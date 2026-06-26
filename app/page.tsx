import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Nav */}
      <header className="flex items-center justify-between px-6 py-5 lg:px-12">
        <span className="text-lg font-bold text-primary-900">AgroMart</span>
        <nav className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-neutral-700 hover:text-primary-700"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-900"
          >
            Get started
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="grid flex-1 items-center gap-10 px-6 py-12 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
            Fertilizer marketplace for Nigeria
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-neutral-900 lg:text-5xl">
            Find fertilizer.
            <br />
            Order on WhatsApp.
          </h1>
          <p className="mt-4 max-w-md text-neutral-500">
            AgroMart connects farmers and distributors with fertilizer
            sellers across Nigeria — browse listings, compare prices, and
            place your order through WhatsApp in seconds.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/products"
              className="rounded-lg bg-primary-700 px-5 py-3 text-sm font-medium text-white transition hover:bg-primary-900"
            >
              Browse products
            </Link>
            <Link
              href="/register"
              className="rounded-lg border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition hover:border-primary-500 hover:text-primary-700"
            >
              Sell on AgroMart
            </Link>
          </div>
        </div>

        {/* Placeholder image — replace src with your own */}
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80"
            alt="Fertilizer and crops"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      {/* How it works */}
      <section className="bg-primary-50 px-6 py-16 lg:px-12">
        <h2 className="text-center text-2xl font-bold text-neutral-900">
          How it works
        </h2>
        <div className="mx-auto mt-10 grid max-w-4xl gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
              1
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900">Browse</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Search and filter fertilizer listings from verified sellers near
              you.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
              2
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900">Contact</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Tap &quot;Order via WhatsApp&quot; to message the seller
              directly — no middleman.
            </p>
          </div>
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-700 text-lg font-bold text-white">
              3
            </div>
            <h3 className="mt-4 font-semibold text-neutral-900">Receive</h3>
            <p className="mt-1 text-sm text-neutral-500">
              Agree on payment and delivery directly with the seller, your
              way.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 px-6 py-6 text-center text-sm text-neutral-400 lg:px-12">
        © {new Date().getFullYear()} AgroMart. Built for farmers and
        distributors across Nigeria.
      </footer>
    </main>
  );
}
