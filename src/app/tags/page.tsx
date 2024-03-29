import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Box, Typography } from "@mui/material";

import { TableTags } from "@/ui/organisms/TagTable";
import { PaginationOutlined } from "@/ui/molecules/PaginationOutlined";
import { SortSelect } from "@/ui/molecules/SortSelect";
import { TagsOnPageInput } from "@/ui/atoms/TagsOnPageInput";

import { getTags } from "@/api/tagAPI";
import { TagsUrlParams } from "@/utils/types";
import { createQueryParams } from "@/utils/helpers";

export const metadata: Metadata = {
  title: "Stack Overflow API - tag browser",
  description:
    "Tag browser provided by the Stack Overflow API  - recruitment task to Mediporta Sp. z o.o.",
};

export default async function TagsPage({
  searchParams,
}: {
  searchParams: TagsUrlParams;
}) {
  const queryParams = createQueryParams(searchParams);
  const data = await getTags(queryParams);

  if (!data) {
    return notFound();
  }

  console.log(666, queryParams);

  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" sx={{ my: 2 }}>
        Stack Overflow API - Tag browser
      </Typography>
      <div>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .MuiTextField-root": { my: 4, width: "25ch" },
          }}
          autoComplete="off"
        >
          <SortSelect />
          <TagsOnPageInput tagsOnPageQuantity={queryParams.pagesize} />
        </Box>
        <TableTags tags={data.items} />
        <PaginationOutlined count={data.quota_max / queryParams.pagesize} />
      </div>
    </Box>
  );
}
