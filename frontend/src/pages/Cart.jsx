import { Link } from "react-router-dom";
import { useAuth } from "../features/auth/auth.context.js";
import { useCart } from "../features/cart/cart.context.js";

function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart();
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-16 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-500">Your bag</p>
          <h1 className="text-3xl font-bold text-white">Shopping cart</h1>
          <p className="max-w-2xl text-slate-300">Review your selected items and continue to checkout when you are ready.</p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-4xl border border-white/10 bg-slate-900/80 p-10 text-center shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-semibold text-white">Your cart is empty</h2>
            <p className="mt-3 text-slate-400">Browse our featured products and add something you love.</p>
            <Link to="/" className="mt-6 inline-flex rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-950">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/80 p-5 shadow-lg shadow-black/10 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-slate-400">${item.price} each</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                      className="w-20 rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-white"
                    />
                    <button onClick={() => removeFromCart(item.id)} className="rounded-full border border-white/10 px-3 py-2 text-sm font-medium text-slate-200">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-4xl border border-amber-500/20 bg-slate-900/90 p-8 text-white shadow-2xl shadow-black/20">
              <h2 className="text-2xl font-semibold">Summary</h2>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Items</span>
                  <span>{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-lg font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              {user ? (
                <Link to="/checkout" className="mt-8 inline-flex w-full justify-center rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-950">
                  Proceed to checkout
                </Link>
              ) : (
                <Link to="/login" className="mt-8 inline-flex w-full justify-center rounded-full bg-amber-500 px-5 py-3 font-semibold text-slate-950">
                  Login to checkout
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
