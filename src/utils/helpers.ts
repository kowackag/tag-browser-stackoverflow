import { TagsUrlParams } from "./types";

export const createQueryParams = (searchParams: TagsUrlParams) => {
  const queryParams = {
    order: searchParams.order?.toString() ?? "",
    sort: searchParams.sort?.toString() ?? "",
    page: Number(searchParams.page) ?? "",
    pagesize: Number(searchParams.pagesize),
  };
  return queryParams;
};
