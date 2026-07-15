import { Link } from "react-router-dom";

function AboutPage() {
  const contactItems = [
    { label: "Phone", value: "0944012970", href: "tel:0944012970" },
    { label: "Email", value: "guzolink@gmail.com", href: "mailto:guzolink@gmail.com" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="overflow-hidden rounded-4xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/20 backdrop-blur">
          <div className="grid gap-8 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">
                About Guzolink
              </p>
              <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
                A smarter marketplace for shoppers and local sellers.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Guzolink brings together trusted merchants, beautiful product discovery, and a calm shopping experience. We help people shop with confidence while giving small businesses an easy digital storefront.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-amber-400"
                >
                  Explore products
                </Link>
                <a
                  href="mailto:guzolink@gmail.com"
                  className="rounded-full border border-white/15 px-5 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Contact support
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-amber-500/20 bg-amber-500/10 p-6">
              <h2 className="text-xl font-semibold text-white">Get in touch</h2>
              <div className="mt-6 space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-4 transition hover:border-amber-400/50"
                  >
                    <span className="text-sm uppercase tracking-[0.25em] text-slate-400">
                      {item.label}
                    </span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Why people love Guzolink</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              We focus on a simple, polished experience so buying and selling feels effortless from the first click to checkout.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Fast support</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Need help with an order or account? Reach out anytime and our team will guide you through the next step.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6">
            <h3 className="text-lg font-semibold text-white">Built for growth</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Whether you are a shopper looking for the best local find or a seller growing your store, Guzolink is ready to support you.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
