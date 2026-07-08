import UserRoute from "./user.route.js";
import OrderRoute from "./orders.routes.js";

export default function RegisterRoutes(app) {
	console.log(`Registering routes: `);
	app.use("/api/user", UserRoute);
	app.use("/api/orders", OrderRoute);
}
