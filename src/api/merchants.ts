
import axios from 'axios';
import { BASE_URL } from '@/constants/api';
import { transformApiResponse } from '@/utils/pagination';
import type { IDataPaginationResponse, IMerchant } from '@/types';

export const fetchMerchants = async (
	params: any
): Promise<IDataPaginationResponse<IMerchant>> => {
	try {
		const response = await axios.get(`${BASE_URL}/customers`, {
			params
		});

		return transformApiResponse<IMerchant>(response.data)


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

export const getMerchant = async (
	params: IMerchant["id"]
): Promise<IMerchant> => {
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

