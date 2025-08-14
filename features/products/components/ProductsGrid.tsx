import { Product } from "../types/Product";
import ProductCard from "./ProductCard";

type Props = {
	products: Product[];
};

const ProductsGrid = ({ products }: Props) => {
	return (
		<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
			{products.map((product) => (
				<ProductCard product={product} key={product.id} />
			))}
		</div>
	);
};

export default ProductsGrid;
