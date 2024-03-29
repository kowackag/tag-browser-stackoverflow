import { TagsUrlParams } from "./types";

export const createQueryParams = (searchParams: TagsUrlParams) => {
  const queryParams = {
    order: searchParams.order?.toString() ?? "",
    sort: searchParams.sort?.toString() ?? "",
    page: searchParams.page ? Number(searchParams.page) : 1,
    pagesize: searchParams.pagesize ? Number(searchParams.pagesize) : 10,
  };
  return queryParams;
};
