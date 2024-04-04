import { type TagsUrlParams } from "./types";

export const createQueryParams = (searchParams: TagsUrlParams, page: number) => {
	const queryParams = {
		order: searchParams.order?.toString() ?? "desc",
		sort: searchParams.sort?.toString() ?? "popular",
		page,
		pagesize: Number(searchParams.pagesize),
	};
	return queryParams;
};
