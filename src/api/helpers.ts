import { type TagsUrlParams } from "@/utils/types";

export const createUrl = ({ order, sort, page, pagesize }: TagsUrlParams) => {
	const orderType = order ? `&order=${order}` : "";
	const sortData = sort ? `&sort=${sort}` : "";
	const pageNumber = page ? `&page=${page}` : "";
	const itemPerPage =
		!pagesize || pagesize > 100 ? "" : `&pagesize=${pagesize}`;

	return `${orderType}${pageNumber}${itemPerPage}${sortData}`;
};
