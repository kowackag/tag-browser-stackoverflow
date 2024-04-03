import { type TagsUrlParams } from "./types";

export const createQueryParams = (searchParams: TagsUrlParams) => {
	const queryParams = {
		order: searchParams.order?.toString() ?? "desc",
		sort: searchParams.sort?.toString() ?? "popular",
		page: searchParams.page ? Number(searchParams.page) : 1,
		pagesize: Number(searchParams.pagesize),
	};
	return queryParams;
};
