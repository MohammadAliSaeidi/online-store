import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "./pagination";

type Props = {
	page: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	showFirstLast?: boolean;
	showEllipsis?: boolean;
	maxVisible?: number;
	size?: "sm" | "md" | "lg";
	disabled?: boolean;
};

const ReusablePagination = (props: Props) => {
	const {
		page,
		totalPages,
		onPageChange,
		showFirstLast = true,
		showEllipsis = true,
		maxVisible = 5,
		disabled = false,
	} = props;

	if (totalPages <= 1) return null;

	const generatePageNumbers = (): (number | "ellipsis")[] => {
		const pages: (number | "ellipsis")[] = [];
		const half = Math.floor(maxVisible / 2);

		let start = Math.max(1, page - half);
		let end = Math.min(totalPages, page + half);

		// Adjust if we're near the beginning or end
		if (end - start + 1 < maxVisible) {
			if (start === 1) {
				end = Math.min(totalPages, start + maxVisible - 1);
			} else {
				start = Math.max(1, end - maxVisible + 1);
			}
		}

		// Add first page and ellipsis if needed
		if (showFirstLast && start > 1) {
			pages.push(1);
			if (start > 2 && showEllipsis) {
				pages.push("ellipsis");
			}
		}

		// Add visible pages
		for (let i = start; i <= end; i++) {
			pages.push(i);
		}

		// Add last page and ellipsis if needed
		if (showFirstLast && end < totalPages) {
			if (end < totalPages - 1 && showEllipsis) {
				pages.push("ellipsis");
			}
			pages.push(totalPages);
		}

		return pages;
	};

	const pageNumbers = generatePageNumbers();

	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={() =>
							!disabled && page > 1 && onPageChange(page - 1)
						}
						className={
							disabled || page === 1
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>

				{pageNumbers.map((pageNum, index) => (
					<PaginationItem key={`page-${pageNum}-${index}`}>
						{pageNum === "ellipsis" ? (
							<PaginationEllipsis />
						) : (
							<PaginationLink
								onClick={() =>
									!disabled && onPageChange(pageNum)
								}
								isActive={page === pageNum}
								className={
									disabled
										? "pointer-events-none opacity-50"
										: "cursor-pointer"
								}
							>
								{pageNum}
							</PaginationLink>
						)}
					</PaginationItem>
				))}

				<PaginationItem>
					<PaginationNext
						onClick={() =>
							!disabled &&
							page < totalPages &&
							onPageChange(page + 1)
						}
						className={
							disabled || page === totalPages
								? "pointer-events-none opacity-50"
								: "cursor-pointer"
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default ReusablePagination;
