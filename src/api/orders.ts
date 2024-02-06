
import axios from 'axios';
import { BASE_URL } from '@/constants/api';
import { transformApiResponse } from '@/utils/pagination';
import type { IDataPaginationResponse, IOrder } from '@/types';

export const fetchOrders = async (
	params: any
): Promise<IDataPaginationResponse<IOrder>> => {
	try {
		const response = await axios.get(`${BASE_URL}/customers`, {
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
		return await axios.get(`${BASE_URL}/${params}`);

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

