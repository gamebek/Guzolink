import {
    createContext,
    useContext,
    useState,
    useEffect,
    useMemo,
    createElement,
  } from "react";

import {storage } from "../../shared/lib/storage";
import { request } from "../../shared/lib/apiClient";

const ShopContext = createContext(null);

function ShopProvider({children}) {
    const [shops, setShops] = useState(() => storage.shop.get());

    useEffect(() => {
        storage.shop.set(shops);
    }, [shops]);

    // 1. Fetch shops from the backend when the component mounts
    const fetchShops = async () => {
        try{
            const fetchShopsData = await request("/api/shops");
            if (fetchShopsData.success) {
                setShops(fetchShopsData.shops);
            } else {
                console.error("Error fetching shops:", fetchShopsData.message);
            }
        }catch (error) {    
            console.error("Error fetching shops:", error);
        }
    }
    // 2. create shop
    const createShop = async (shopInfo) => {
        try {
            const createShopData = await request("/api/shops", {
                method: "POST",
                body: JSON.stringify(shopInfo),
            });
            if (createShopData.success) {
                setShops((prevShops) => [...prevShops, createShopData.shop]);
            } else {
                console.error("Error creating shop:", createShopData.message);
            }
        } catch (error) {
            console.error("Error creating shop:", error);
        }
    };

    // 3. Delete shop
    const deleteShop = async (id) => {
    try {
      const data = await request(`/api/shop/${id}`, { method: "DELETE" });
      if (data.success) {
        setShops((prev) => prev.filter((s) => s._id !== id));
      } else {
        console.error("Error deleting shop:", data.message);
      }
    } catch (e) {
      console.error("Error deleting shop:", e);
    }
  };

    const value = useMemo(() => ({
        shops,
        fetchShops,
        createShop,
        deleteShop,
    }), [shops]);

    return createElement(ShopContext.Provider, {value}, children);
}

function useShops() {
    const context = useContext(ShopContext);
    if (!context) {
        throw new Error("useShops must be used within a ShopProvider");
    }
    return context;
}

export {ShopProvider, useShops};