import { TableColumnConfig } from "@/types";

export const CUSTOMER_TABLE_CONFIG: TableColumnConfig[] = [
	{ header: 'First Name', key: 'first_name', style: 'pl-2 text-left justify-end text-sm', format: 'string' },
	{ header: 'Last Name', key: 'last_name', style: 'text-left justify-end text-sm', format: 'string' },
	{ header: 'Email', key: 'description', style: 'text-left overflow-hidden flex-0-0px max-w-1xl text-sm', format: 'string' },
	{ header: 'Phone', key: 'brand', style: 'text-left text-sm pl-2', format: 'string', hideAt: 'sm' },
	{ header: 'Address', key: 'price', style: 'text-right text-sm px-2', format: 'string' },
	{ header: 'Created At', key: 'created_at', style: ' px-2 text-right text-sm ', format: 'date' },
	{ header: 'Updated At', key: 'updated_at', style: 'text-right text-sm flex-1 pr-2', format: 'date' }
];

export const MERCHANT_TABLE_CONFIG: TableColumnConfig[] = [
	{ header: 'Name', key: 'name', style: 'pl-2 text-left justify-end text-sm', format: 'string' },
	{ header: 'Created At', key: 'created_at', style: 'px-2 text-right text-sm ', format: 'date' },
	{ header: 'Updated At', key: 'updated_at', style: 'text-right text-sm flex-1 pr-2', format: 'date' }
];

export const ORDER_TABLE_CONFIG: TableColumnConfig[] = [
	{ header: 'Type', key: 'type', style: 'pl-2 text-left justify-end text-sm', format: 'string' },
	{ header: 'Customer', key: 'customer', style: 'text-left justify-end text-sm', format: 'string' },
	{ header: 'Merchant', key: 'merchant', style: 'text-left justify-end text-sm', format: 'string' },
	{ header: 'Total', key: 'total_amount', style: ' text-right justify-end text-sm', format: 'currency' },
	{ header: 'Created At', key: 'created_at', style: ' px-2 text-right text-sm ', format: 'date' },
	{ header: 'Updated At', key: 'updated_at', style: 'text-right text-sm flex-1 pr-2', format: 'date' }
];

export const TRANSACTION_TABLE_CONFIG: TableColumnConfig[] = [
	{ header: 'Order', key: "order", style: 'pl - 2 text-left justify-end text-sm', format: 'string' },
	{ header: 'Type', key: 'type', style: 'pl-2 text-left justify-end text-sm', format: 'string' },
	{ header: 'Customer', key: 'customer', style: 'text-left justify-end text-sm', format: 'string' },
	{ header: 'Merchant', key: 'merchant', style: 'text-left justify-end text-sm', format: 'string' },
	{ header: 'Amount', key: 'amount', style: 'text-right justify-end text-sm', format: 'currency' },
	{ header: 'Created At', key: 'created_at', style: ' px-2 text-left text-sm ', format: 'date' },
	{ header: 'Updated At', key: 'updated_at', style: 'text-left text-sm flex-1 pr-2', format: 'date' }
];