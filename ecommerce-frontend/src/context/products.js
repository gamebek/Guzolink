import { createContext, createElement, useContext, useMemo } from "react";
import { AuthProvider, useAuth } from "../features/auth/auth.context";
import { CartProvider, useCart } from "../features/cart/cart.context";
import { CatalogProvider, useCatalog } from "../features/catalog/catalog.context";

const ProductsContext = createContext(null);

function ProductsProvider({ children }) {
  return (
    createElement(
      AuthProvider,
      null,
      createElement(
        CartProvider,
        null,
        createElement(
          CatalogProvider,
          null,
          createElement(ProductsBridge, null, children)
        )
      )
    )
  );
}

function ProductsBridge({ children }) {
  const auth = useAuth();
  const cart = useCart();
  const catalog = useCatalog();

  const value = useMemo(
    () => ({
      ...auth,
      ...cart,
      ...catalog,
    }),
    [auth, cart, catalog]
  );

  return createElement(ProductsContext.Provider, { value }, children);
}

function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}

export { ProductsProvider, useProducts };
