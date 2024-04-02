import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

// import { Box, Typography } from "@mui/material";
import { TableTags } from "@/ui/organisms/TagTable";
import { Pagination } from "@/ui/molecules/Pagination";
import { SortSelect } from "@/ui/molecules/SortSelect";
import { TagsOnPageInput } from "@/ui/atoms/TagsOnPageInput";
import Loading from "./loading";

import { getTags } from "@/api/tagAPI";
import { TagsUrlParams } from "@/utils/types";
import { createQueryParams } from "@/utils/helpers";
import { Title } from "@/ui/atoms/Title";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { OrderRadio } from "@/ui/atoms/OrderRadio";

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

	const lastPageNumber = Math.ceil(data.quota_max / queryParams.pagesize) ?? 1;

	return (
		<SectionContainer>
			<Title>Stack Overflow API - Tag browser </Title>
			{
				<div>
					
					<div className="flex items-end justify-between">
						<p>Searchfield</p>
						<form className="md:flex items-end justify-center">
							<TagsOnPageInput tagsOnPageQuantity={queryParams.pagesize} />

							<SortSelect />
							<OrderRadio />
						</form>
					</div>
					<Suspense fallback={<Loading />}>
						<TableTags tags={data.items} />
					</Suspense>
					<Pagination pageQuantity={lastPageNumber} />
				</div>
			}
		</SectionContainer>
	);
}
