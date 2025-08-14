import { ApiFunction } from "@/features/shared/types/ApiFunction";
import { QueryParams } from "@/features/shared/types/QueryParams";
import axiosInstance from "@/lib/axios";
import { buildQueryString } from "./buildQueryString";

export const createTypedApiCaller = <TResponse, TParams = QueryParams>(
	endpoint: string
): ApiFunction<TResponse, TParams> => {
	return async (params = {} as TParams) => {
		const queryString = buildQueryString(params as Record<string, any>);
		return axiosInstance.get<TResponse>(`${endpoint}${queryString}`);
	};
};
