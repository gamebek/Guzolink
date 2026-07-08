import { Link } from "react-router-dom";
import ShopCard from "../components/ShopCard";
import {useShops} from "../shop.context.js";

function MyShops() {
  const { shops, error, deleteShop } = useShops();

  return (
    <div className="p-3">
     {error && <p className="text-red-600 rounded-2xl text-center font-bold mb-4 border border-red-500 p-5">{error}</p>}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {!shops || shops.length === 0 ? (
          <p className="text-red-600 rounded-2xl text-center font-bold mb-4 border border-red-500 p-5">You have no shops yet .</p>
        ) : (
          shops.map((shop) => (
            <ShopCard key={shop._id} shop={shop} onDelete={deleteShop} />
          ))
        )}
      </div>
        <Link
        to="/shop/create"
        className="inline-flex items-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-amber-400 transition mb-4"
      >
        + Add New Shop
      </Link>

      {/* Merchant details section */}
      {/* <div className="mt-8">
        <h3 className="text-lg font-semibold text-white mb-2">All Shops Summary </h3>
        <p className="text-slate-300 rounded-2xl text-center border border-amber-300 p-5">Shop information will be displayed here.</p>
      </div> */}
    </div>
  );
}

export default MyShops;
