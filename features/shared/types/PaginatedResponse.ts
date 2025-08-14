export type PaginatedResponse<K extends string, T> = {
	total: number;
	skip: number;
	limit: number;
} & {
	[P in K]: T[];
};
