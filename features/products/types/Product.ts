import { ProductDimensions } from "./ProductDimentions";
import { ProductMeta } from "./ProductMeta";
import { ProductReview } from "./ProductReview";

export interface Product {
	id: number;
	title: string;
	description: string;
	category: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	tags: string[];
	brand: string;
	sku: string;
	weight: number;
	dimensions: ProductDimensions;
	warrantyInformation: string;
	shippingInformation: string;
	availabilityStatus: string;
	reviews: ProductReview[];
	returnPolicy: string;
	minimumOrderQuantity: number;
	meta: ProductMeta;
	thumbnail: string;
	images: string[];
}
