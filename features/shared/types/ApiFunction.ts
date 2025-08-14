import { AxiosResponse } from "axios";
import { QueryParams } from "./QueryParams";

export type ApiFunction<TResponse, TParams = QueryParams> = (
	params?: TParams
) => Promise<AxiosResponse<TResponse>>;
