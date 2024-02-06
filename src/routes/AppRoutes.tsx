import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import Merchants from "@/components/merchants";
import Customers from "@/components/customers";
import Transactions from "@/components/transactions";
import Orders from "@/components/orders";
import Settlements from "@/components/settlements";
import ErrorPage from "@/pages/error-page";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
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
