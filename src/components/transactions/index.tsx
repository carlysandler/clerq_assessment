import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { fetchTransactions } from "@/api/transactions";
import { Table } from "../table";
import { TRANSACTION_TABLE_CONFIG } from "@/constants/tableConfig";

export default function Transactions() {

	const { params } = useAppSelector(
		(state) => state.tableData
	);

	const dispatch = useAppDispatch();
	return (
		<div>
			<h2>Transactions</h2>
			<Table
				fetch={fetchTransactions}
				config={TRANSACTION_TABLE_CONFIG}
				params={params ?? {
					page: 1
				}}
			/>
		</div>
	)
}