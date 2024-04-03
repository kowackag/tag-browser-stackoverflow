"use client";

import { type ChangeEvent, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useSetParams } from "@/utils/useSetParams";
import { useDebounce } from "@/utils/useDebounce";

export const PageSizeInput = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pageSizeParam = Number(searchParams.get("pagesize")) || 30;

	const [pageSize, setPageSize] = useState(pageSizeParam);

	const debouncedPhrase = useDebounce<number>(pageSize, 600);
	const changeUrlParams = useSetParams(searchParams);

	useEffect(() => {
		if (!debouncedPhrase) return;

		router.push(
			`/tags?${changeUrlParams("pagesize", debouncedPhrase.toString())}`,
		);
	}, [debouncedPhrase, router]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (Number(e.target.value) > 0 || Number(e.target.value) <= 100) {
			e.preventDefault();
			setPageSize(Number(e.target.value));
		}
	};

	return (
		<div className="relative w-36 px-3 py-2">
			<label
				htmlFor="page-size"
				className="absolute top-0 m-auto mx-3 bg-white px-1 text-xs"
			>
				Tags on page
			</label>
			<input
				id="page-size"
				className="w-full rounded-md border bg-transparent py-2 pl-3 pr-3 text-zinc-600 shadow-sm outline-none focus:border-sky-600"
				type="number"
				onChange={handleChange}
				value={pageSize}
				max={100}
				min={1}
			/>
		</div>
	);
};
