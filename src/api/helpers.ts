import { TagsUrlParams } from "@/utils/types";

export const createUrl = ({ order, sort, page, pagesize }: TagsUrlParams) => {
  const orderType = order ? `order=${order}` : "order=desc";
  const sortData = sort ? `&order=${sort}` : "&sort=popular";
  const pageNumber = page ? `&page=${page}` : "";
  const itemPerPage = pagesize ? `&page=${pagesize}` : "";

  return `${orderType}${pageNumber}${itemPerPage}${sortData}&site=stackoverflow`;
};
