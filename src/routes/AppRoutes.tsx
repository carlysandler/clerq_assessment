import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Merchants from "@/pages/merchants";
import Customers from "@/pages/customers";
import Transactions from "@/pages/transactions";
import Orders from "@/pages/orders";
import Settlements from "@/pages/settlements";
import ErrorPage from "@/pages/error-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/merchants",
				element: <Merchants />,
			},
			{
				path: "/customers",
				element: <Customers />
			},
			{
				path: "/transactions",
				element: <Transactions />
			},
			{
				path: "/orders",
				element: <Orders />
			},
			{
				path: "/settlements",
				element: <Settlements />
			}
		],
	},
]);

export default router;
