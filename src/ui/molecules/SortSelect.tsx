"use client";

import { ChangeEvent, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
// import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { useSetParams } from "@/utils/useSetParams";

export const SortSelect = () => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const searchParams = useSearchParams();

	const [sorted, setSorted] = useState(searchParams.get("sorted") ?? "popular");

	const changeUrlParams = useSetParams(searchParams);

	const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		startTransition(() => {
			const sortBy: string = e.target.value;
			setSorted(sortBy);
			router.push(`/tags?${changeUrlParams("sort", sortBy)}`);
		});
	};
	console.log(isPending);
	return (
		<div className="relative w-36 px-3 py-2 ">
			<label
				htmlFor="sorted"
				className="absolute  top-0 m-auto mx-3 block bg-white px-1 text-xs font-medium"
			>
				Sort by
			</label>

			<select
				className="w-full rounded-md border bg-transparent py-2 pl-3 pr-3 text-zinc-600 shadow-sm outline-none focus:border-sky-600"
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
