import { cn } from "@/lib/utils";

type Props = {
	basePrice: number;
	discountPercentage: number;
};

export default function Price({ basePrice, discountPercentage }: Props) {
	const discountedPrice = basePrice * 0.9

	return (
		<div className="flex flex-nowrap gap-2">
			{discountPercentage}% OFF
			<div className={cn(discountPercentage > 0 && "line-through")}>
				{basePrice}$
			</div>
			{discountedPrice.toFixed(2)}$
		</div>
	);
}
