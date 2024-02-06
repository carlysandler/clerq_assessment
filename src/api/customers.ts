
import axios from 'axios';
import { BASE_URL } from '@/constants/api';
import { transformApiResponse } from '@/utils/pagination';
import type { IDataPaginationResponse, ICustomer } from '@/types';

export const fetchCustomers = async (
	params: any
): Promise<IDataPaginationResponse<ICustomer>> => {
	try {
		const response = await axios.get(`${BASE_URL}/customers`, {
			params
		});

		return transformApiResponse<ICustomer>(response.data)


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

export const getCustomer = async (
	params: ICustomer["id"]
): Promise<ICustomer> => {
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

