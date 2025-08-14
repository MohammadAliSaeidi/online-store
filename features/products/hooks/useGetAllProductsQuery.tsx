import { QUERY_KEYS } from "@/features/shared/data/queryKeys";
import { PaginationParams } from "@/features/shared/types/PaginationParams";
import { SearchParams } from "@/features/shared/types/SearchParams";
import { useQuery } from "@tanstack/react-query";
import getProducts from "../services/api/getAllProducts";

const useGetAllProductsQuery = (params: SearchParams & PaginationParams) => {
	return useQuery({
		queryFn: () => getProducts(params),
		queryKey: [QUERY_KEYS.PRODUCTS],
	});
};

export default useGetAllProductsQuery;
