import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../features/cart/cart.context.js";
import { useAuth } from "../features/auth/auth.context.js";
import ConfirmModal from "./ConfirmModal.jsx";

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-xl font-semibold tracking-tight text-white">
          Guzolink
        </NavLink>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-amber-600" : "")}
          >
            Home
          </NavLink>

          <NavLink
            to={`/profile/${user?.id || user?._id}`}
            className={({ isActive }) => (isActive ? "text-amber-600" : "")}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) => (isActive ? "text-amber-600" : "")}
          >
            Cart ({cart.length})
          </NavLink>
          <NavLink
            to="/aboutus"
            className={({ isActive }) => (isActive ? "text-amber-600" : "")}
          >
            About us
          </NavLink>
          <NavLink
            to="/support"
            className={({ isActive }) => (isActive ? "text-amber-600" : "")}
          >
            Contact us
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <span className="hidden rounded-full bg-white/10 px-3 py-1 text-sm text-slate-200 sm:inline">
                Hi, {user.username}
              </span>

              <button
                onClick={() => setShowLogoutModal(true)}
                className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="rounded-full bg-amber-500 px-3 py-1.5 text-sm font-medium text-slate-950 transition hover:bg-amber-400"
              >
                Sign up
              </Link>
            </>
          )}

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-slate-200 transition hover:bg-white/10 md:hidden"
            aria-label="Toggle navigation"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <div className={`border-t border-white/10 px-4 py-4 md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm font-medium text-slate-200">
          <NavLink
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to={`/profile/${user?.id || user?._id}`}
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Cart ({cart.length})
          </NavLink>
          <NavLink
            to="/aboutus"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            About us
          </NavLink>
          <NavLink
            to="/support"
            onClick={() => setMobileMenuOpen(false)}
            className={({ isActive }) => (isActive ? "text-amber-500" : "")}
          >
            Contact us
          </NavLink>
        onConfirm={handleLogout}
        onCancel={() => setShowLogoutModal(false)}
      />
    </header>
  );
}

export default Navbar;
