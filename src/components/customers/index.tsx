import { useAppSelector } from "@/store/hooks";
import { fetchCustomers } from "@/api/customers";
import { Table } from "../table";
import { CUSTOMER_TABLE_CONFIG } from "@/constants/tableConfig";

export default function Customers() {

	const { params } = useAppSelector(
		(state) => state.tableData
	);

	return (
		<div>
			<h2>Customers</h2>
			<Table
				fetch={fetchCustomers}
				config={CUSTOMER_TABLE_CONFIG}
				params={params ?? {
					page: 1
				}}
			/>
		</div>
	)
}
