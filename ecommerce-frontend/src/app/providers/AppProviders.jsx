import { ProductsProvider } from "../../context/products";

function AppProviders({ children }) {
  return <ProductsProvider>{children}</ProductsProvider>;
}

export default AppProviders;
