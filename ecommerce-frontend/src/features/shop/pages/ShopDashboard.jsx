import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { request } from "../../../shared/lib/apiClient";

function ShopDashboard() {
  const { shopId } = useParams();
  const [shop, setShop] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const data = await request(`/api/shop/${shopId}`);
        if (data.success) setShop(data.shop);
        else setError(data.message);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, [shopId]);

  if (error) return <p className="p-6 text-red-600">{error}</p>;
  if (!shop) return <p className="p-6">Loading…</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">{shop.name}</h2>
      <p className="mb-4">{shop.description}</p>

      <Link
        to={`/shop/${shopId}/product/create`}
        className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-400"
      >
        Add product
      </Link>

      {/* Future: list products here */}
    </div>
  );
}

export default ShopDashboard;
