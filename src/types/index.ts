
// Common Types
export type UUID = string;
export type DateTimeString = string;
export type URIString = string;
export type DecimalString = string;

// Enum Types
enum OrderType {
	PURCHASE = "PURCHASE",
	REFUND = "REFUND",
}

export interface IMerchant {
	id: UUID;
	createdAt: DateTimeString;
	updatedAt: DateTimeString;
	name: string;
}

export interface ICustomer {
	id: UUID;
	createdAt: DateTimeString;
	updatedAt: DateTimeString;
	firstName: string;
	lastName: string;
	phone: string;
	address: string | null;
	email: string;

}

export interface IFBOAccount {

}

export interface IOrder {
	id: UUID;
	transactions: ITransaction["id"][];
	createdAt: DateTimeString;
	updatedAt: DateTimeString;
	type: OrderType;
	itemsData: Record<string, unknown>;
	totalAmount: DecimalString;
	traceId: string;
	parentOrder: UUID | null;
	customer: UUID;
	merchant: UUID;

}

export interface ITransaction {
	id: string;
	createdAt: DateTimeString;
	updatedAt: DateTimeString;
	amount: DecimalString;
	type: OrderType;
	customer: UUID;
	merchant: UUID;
	order: UUID;


}

export interface MetaData {
	total: number;
	next: string | null;
	previous: string | null;
}


export interface IPaginatedList<T> {
	count: number;
	next: string | null;
	previous: string | null;
	results: T[]
}

export interface IDataPaginationResponse<T> {
	data: T[];
	meta: MetaData;
}

export interface TableColumnConfig {
	header: string;
	key: string;
	style: string;
	hideAt?: string;
	format?: "currency" | "percentage" | "string" | "number" | "date";
}

export type IPossibleDataType = IMerchant | ICustomer | IOrder | ITransaction;
export type PaginatedCustomerList = IPaginatedList<ICustomer>;
export type PaginatedMerchantList = IPaginatedList<IMerchant>;
export type PaginatedOrderList = IPaginatedList<IOrder>;
export type PaginatedTransactionList = IPaginatedList<ITransaction>;

// Request Parameters for List Endpoints
export interface ListRequestParams {
	created_at?: DateTimeString;
	created_at__gt?: DateTimeString;
	created_at__gte?: DateTimeString;
	created_at__lt?: DateTimeString;
	created_at__lte?: DateTimeString;
	updated_at?: DateTimeString;
	updated_at__gt?: DateTimeString;
	updated_at__gte?: DateTimeString;
	updated_at__lt?: DateTimeString;
	updated_at__lte?: DateTimeString;
	email?: string;
	phone?: string;
	id?: UUID;
	ordering?: string;
	page: number;
	total_amount?: number;
	total_amount__gt?: number;
	total_amount__gte?: number;
	total_amount__lt?: number;
	total_amount__lte?: number;
	type?: OrderType;
}

export interface RetrieveRequestParams {
	id: UUID;
}