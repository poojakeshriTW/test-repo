
'use client';

export function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="hidden bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-700 p-8 text-white lg:flex lg:flex-col lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-100">
                Retail access
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight">Your store, simplified.</h1>
            </div>

            <div className="space-y-4 text-sm text-emerald-50">
              <p>Manage sales, inventory, and customer experiences from one place.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="text-2xl font-semibold">24/7</div>
                  <div className="text-emerald-100">Store visibility</div>
                </div>
                <div className="rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
                  <div className="text-2xl font-semibold">1.2k</div>
                  <div className="text-emerald-100">Orders tracked</div>
                </div>
              </div>
            </div>
          </section>

          <section className="p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Welcome back
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900">Sign in</h2>
              <p className="mt-2 text-sm text-slate-500">
                Access your retail dashboard to view performance and manage operations.
              </p>
            </div>

            <form className="space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@retail.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 shadow-sm transition focus:border-emerald-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-emerald-100"
                />
              </div>

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-2 text-slate-600">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" />
                  Remember me
                </label>
                <a href="#" className="font-medium text-emerald-600 transition hover:text-emerald-700">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                Sign in
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  return <LoginPage />;
}
