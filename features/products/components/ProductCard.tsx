import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Product } from "../types/Product";
import Price from "./Price";

type Props = {
	product: Product;
};

export default function ProductCard({ product }: Props) {
	const {
		category,
		description,
		id,
		images,
		price,
		title,
		discountPercentage,
	} = product;

	return (
		<Card>
			<CardContent>
				<CardHeader>
					<Carousel>
						<CarouselContent>
							{images.map((image) => (
								<CarouselItem key={image}>
									<div className="h-64 relative">
										<Image
											src={image}
											alt={"image not available"}
											loading="lazy"
											fill
											objectFit="contain"
										/>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>
					<CardTitle>{title}</CardTitle>
					<CardDescription className="line-clamp-3">
						{description}
					</CardDescription>
					<Price
						basePrice={price}
						discountPercentage={discountPercentage}
					/>
				</CardHeader>
			</CardContent>
		</Card>
	);
}
