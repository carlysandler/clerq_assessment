import { useAppSelector } from "@/store/hooks";
import { fetchMerchants } from "@/api/merchants";
import { Table } from "../table";
import { MERCHANT_TABLE_CONFIG } from "@/constants/tableConfig";

export default function Merchants() {

	const { params } = useAppSelector(
		(state) => state.tableData
	);

	return (
		<div>
			<h2>Merchants</h2>
			<Table
				fetch={fetchMerchants}
				config={MERCHANT_TABLE_CONFIG}
				params={params ?? {
					page: 1
				}}
			/>
		</div>
	)
}