import type { IPaginatedList, MetaData } from "@/types";

export const transformApiResponse = <T>(response: IPaginatedList<T>): { data: T[], meta: MetaData } => {
	const { count, previous, next, ...rest } = response;
	return {
		data: rest.results,
		meta: { total: count, previous, next } // Extracted pagination metadata
	};
};