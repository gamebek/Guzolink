import UserRoute from "./user.route.js";
import ShopRoute from "./shops.route.js";
import { graphqlHandler } from "../graphql/index.js";
import ShopCategoryRoute from "./shopCategory.route.js";
import ProductCategoryRoute from "./productCategory.route.js";

export default function RegisterRoutes(app) {
	console.log(`Registering routes: `);
	app.use("/api/user", UserRoute);
	app.use("/api/shops", ShopRoute);
	app.use("/graphql", graphqlHandler);
	app.use("/api/shop-category", ShopCategoryRoute);
	app.use("/api/product-category", ProductCategoryRoute);
}
