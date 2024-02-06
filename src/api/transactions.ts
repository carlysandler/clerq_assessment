
import axios from 'axios';
import { BASE_URL } from '@/constants/api';
import { transformApiResponse } from '@/utils/pagination';
import type { IDataPaginationResponse, ITransaction, ListRequestParams } from '@/types';

export const fetchTransactions = async (
	params: ListRequestParams
): Promise<IDataPaginationResponse<ITransaction>> => {
	try {
		const response = await axios.get(`${BASE_URL}/transactions`, {
			params
		});

		return transformApiResponse<ITransaction>(response.data)


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

export const getTransaction = async (
	params: ITransaction["id"]
): Promise<ITransaction> => {
	try {
		return await axios.get(`${BASE_URL}/transactions/${params}`);

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

