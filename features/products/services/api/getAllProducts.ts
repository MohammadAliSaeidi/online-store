import { PaginatedResponse } from "@/features/shared/types/PaginatedResponse";
import { createTypedApiCaller } from "@/lib/utils/http/createTypedApiCaller";
import { Product } from "../../types/Product";

const getProducts =
	createTypedApiCaller<PaginatedResponse<"products", Product>>("/products");

export default getProducts;
