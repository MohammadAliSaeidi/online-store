"use client";

import Loading from "@/components/ui/loading";
import useGetAllProductsQuery from "../hooks/useGetAllProductsQuery";
import ProductsGrid from "./ProductsGrid";

export default function ProductsSection() {
	const { data, isFetching, isSuccess } = useGetAllProductsQuery({});

	return (
		<>
			{isFetching && (
				<div className="flex flex-col justify-center items-center h-dvh">
					<Loading />
				</div>
			)}
			{isSuccess && !isFetching && (
				<ProductsGrid
					// products={mockData}
					products={data?.data.products}
				/>
			)}
		</>
	);
}
