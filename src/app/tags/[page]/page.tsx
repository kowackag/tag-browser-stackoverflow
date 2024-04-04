import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { TableTags } from "@/ui/organisms/TagTable";
import { Pagination } from "@/ui/molecules/Pagination";
import { SortBySelect } from "@/ui/molecules/SortBySelect";
import { SortOrderRadio } from "@/ui/molecules/SortOrderRadio";
import { PageSizeInput } from "@/ui/atoms/PageSizeInput";
import { Title } from "@/ui/atoms/Title";
import { SectionContainer } from "@/ui/atoms/SectionContainer";
import Loading from "../loading";

import { getTags } from "@/api/tagAPI";
import { type TagsUrlParams } from "@/utils/types";
import { createQueryParams } from "@/utils/helpers";

export const metadata: Metadata = {
	title: "Stack Overflow API - tag browser",
	description:
		"Tag browser provided by the Stack Overflow API  - recruitment task to Mediporta Sp. z o.o.",
};

type TagsPageParams = {
	readonly params: { page: string };
	readonly searchParams: TagsUrlParams;
};

export default async function TagsPage({
	params,
	searchParams,
}: TagsPageParams) {
	const queryParams = createQueryParams(searchParams, Number(params.page));

	const data = await getTags(queryParams);

	if (!data) {
		return notFound();
	}

	return (
		<SectionContainer>
			<Title>Stack Overflow API - Tag browser </Title>
			<div>
				<div className="items-end justify-between md:flex">
					<p>Searchfield</p>
					<form className="flex items-end justify-center">
						<PageSizeInput />
						<SortBySelect />
						<SortOrderRadio />
					</form>
				</div>
				<Suspense fallback={<Loading />}>
					<TableTags tags={data.items} />
				</Suspense>
				<Pagination
					pageSize={queryParams.pagesize || 10}
					totalTags={data.quota_max}
					currentPage={Number(params.page)}
				/>
			</div>
		</SectionContainer>
	);
}
