function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">Guzolink</p>
          <p className="mt-1">© 2026 Guzolink. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="/" className="transition hover:text-amber-400">
            Home
          </a>
          <a href="/aboutus" className="transition hover:text-amber-400">
            About us
          </a>
          <a href="/cart" className="transition hover:text-amber-400">
            Cart
          </a>
          <a href="mailto:guzolink@gmail.com" className="transition hover:text-amber-400">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
