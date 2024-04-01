import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// import { Box, Typography } from "@mui/material";
// import { TableTags } from "@/ui/organisms/TagTable";
// import { PaginationOutlined } from "@/ui/molecules/PaginationOutlined";
import { SortSelect } from "@/ui/molecules/SortSelect";
// import { TagsOnPageInput } from "@/ui/atoms/TagsOnPageInput";
import Loading from "./loading";

import { getTags } from "@/api/tagAPI";
import { TagsUrlParams } from "@/utils/types";
import { createQueryParams } from "@/utils/helpers";
import { Title } from "@/ui/atoms/Title";

export const metadata: Metadata = {
  title: "Stack Overflow API - tag browser",
  description:
    "Tag browser provided by the Stack Overflow API  - recruitment task to Mediporta Sp. z o.o.",
};

type TagsPageParams = {
  readonly searchParams: TagsUrlParams;
};

export default async function TagsPage({ searchParams }: TagsPageParams) {
  const queryParams = createQueryParams(searchParams);
  const data = await getTags(queryParams);

  if (!data) {
    return notFound();
  }

  const lastPageNumber = Math.ceil(data.quota_max / queryParams.pagesize);

  return (
    <div >
      <Title>Stack Overflow API - Tag browser </Title>
      {<div>
        <form className="flex items-center justify-center"
        >
          <SortSelect />
          {/* <TagsOnPageInput tagsOnPageQuantity={queryParams.pagesize} /> */}
        </form>
        <Suspense fallback={<Loading />}>
          {/* <TableTags tags={data.items} /> */}
        </Suspense>
        {/* <PaginationOutlined count={lastPageNumber} />  */}
    </div>}
     </div>
  );
}
