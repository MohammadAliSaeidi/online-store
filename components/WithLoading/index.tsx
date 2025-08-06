import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import Loading from "../ui/loading";

type Props = PropsWithChildren<{
	className?: Omit<string, "relative">;
	isLoading?: boolean;
}>;

export default function WithLoading(props: Props) {
	const { isLoading, children, className } = props;

	return (
		<div className={cn("relative", className)}>
			<div className={cn(isLoading && "opacity-50 pointer-events-none")}>
				{children}
			</div>
			{isLoading && (
				<div className="left-1/2 top-1/2 absolute -translate-x-1/2 -translate-y-1/2">
					<Loading />
				</div>
			)}
		</div>
	);
}
