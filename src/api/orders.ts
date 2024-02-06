
import axios from 'axios';
import { BASE_URL } from '@/constants/api';
import { transformApiResponse } from '@/utils/pagination';
import type { IDataPaginationResponse, IOrder, ListRequestParams } from '@/types';

export const fetchOrders = async (
	params: ListRequestParams
): Promise<IDataPaginationResponse<IOrder>> => {
	try {
		const response = await axios.get(`${BASE_URL}/orders`, {
			params
		});

		return transformApiResponse<IOrder>(response.data)


	} catch (err) {
		if (axios.isAxiosError(err)) {
			console.error("Error fetching data", err.response)
			throw new Error(err.response?.data.message || "API request failed");
		} else {
			console.error("Non-Axios error:", err);
			throw new Error("An unexpected error occurred")
		}
	}
}

export const getOrder = async (
	params: IOrder["id"]
): Promise<IOrder> => {
	try {
		return await axios.get(`${BASE_URL}/orders/${params}/`);

	} catch (err) {
		if (axios.isAxiosError(err)) {
			console.error("Error fetching data", err.response)
			throw new Error(err.response?.data.message || "API request failed");
		} else {
			console.error("Non-Axios error:", err);
			throw new Error("An unexpected error occurred")
		}
	}
}

