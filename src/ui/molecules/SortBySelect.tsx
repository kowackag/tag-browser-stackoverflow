"use client";

import { Route } from "next";
import { type ChangeEvent, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useSetParams } from "@/utils/hooks/useSetParams";

export const SortBySelect = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();

	const [sorted, setSorted] = useState(searchParams.get("sorted") || "popular");

	const changeUrlParams = useSetParams(searchParams);

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		const sortBy: string = e.target.value;
		setSorted(sortBy);
		router.push(`${pathname}?${changeUrlParams("sort", sortBy)} ` as Route);
	};

	return (
		<div className="relative w-36 pt-2 ">
			<label
				htmlFor="sorted"
				className="absolute top-0 m-auto mx-3 block bg-white px-1 text-xs font-medium"
			>
				Sort by
			</label>

			<select
				className="h-11 w-full rounded-md border bg-transparent pl-3 pr-2 text-zinc-600 shadow-sm outline-none focus:border-sky-600"
				id="sorted"
				value={sorted}
				onChange={handleChange}
			>
				<option className="inline-block py-4" value="popular">
					Popular
				</option>
				<option value="activity">Activity</option>
				<option value="name">Name</option>
			</select>
		</div>
	);
};
