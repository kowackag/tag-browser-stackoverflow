"use client";

import { Route } from "next";
import { type ChangeEvent, useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useSetParams } from "@/utils/hooks/useSetParams";
import { useDebounce } from "@/utils/hooks/useDebounce";

export const PageSizeInput = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const pageSizeParam = Number(searchParams.get("pagesize")) || 10;

	const [pageSize, setPageSize] = useState(pageSizeParam);

	const debouncedPhrase = useDebounce<number>(pageSize, 600);
	const changeUrlParams = useSetParams(searchParams);

	useEffect(() => {
		if (!debouncedPhrase) return;
		router.push(
			`${pathname}?${changeUrlParams("pagesize", debouncedPhrase.toString())}` as Route,
		);
	}, [debouncedPhrase, router, changeUrlParams]);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (Number(e.target.value) > 0 || Number(e.target.value) <= 100) {
			e.preventDefault();
			setPageSize(Number(e.target.value));
		}
	};

	return (
		<div className="w-30 relative px-3 pt-2">
			<label
				htmlFor="page-size"
				className="absolute top-0 m-auto mx-3 bg-white px-1 text-xs"
			>
				Page size
			</label>
			<input
				id="page-size"
				className="h-11 w-full rounded-md border bg-transparent pl-3 pr-3 text-zinc-600 shadow-sm outline-none focus:border-sky-600"
				type="number"
				onChange={handleChange}
				value={pageSize}
				max={100}
				min={1}
			/>
		</div>
	);
};
