"use client";

import ProductsSection from "@/features/products/components/ProductsSection";

export default function Home() {
	// const queryClient = new QueryClient();

	// await queryClient.prefetchQuery({
	// 	queryFn: () => getProducts({}),
	// 	queryKey: [QUERY_KEYS.PRODUCTS],
	// });

	// const { value, updateUrlParam } = useQueryParamsState({
	// name: "search",
	// defaultValue: "test",
	// onStateChange: (state) => {
	// console.log(state);
	// },
	// });

	return (
		<div className="p-6">
			{/* <HydrationBoundary state={dehydrate(queryClient)}> */}
			<ProductsSection />
			{/* </HydrationBoundary> */}
		</div>
	);
}
