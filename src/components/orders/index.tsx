import { useAppSelector } from "@/store/hooks";
import { fetchOrders } from "@/api/orders";
import { Table } from "../table";
import { ORDER_TABLE_CONFIG } from "@/constants/tableConfig";

export default function Orders() {

	const { params } = useAppSelector(
		(state) => state.tableData
	);

	return (
		<div>
			<h2>Orders</h2>
			<Table
				fetch={fetchOrders}
				config={ORDER_TABLE_CONFIG}
				params={params ?? {
					page: 1
				}}
			/>
		</div>
	)
}