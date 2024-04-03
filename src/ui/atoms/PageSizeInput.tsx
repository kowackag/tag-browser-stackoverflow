"use client";

import { type ChangeEvent, startTransition, useOptimistic } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useSetParams } from "@/utils/useSetParams";

export const PageSizeInput = ({
	pageSize,
}: {
	pageSize: number;
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const [optimisticPageSize, setOptimisticPageSize] =
		useOptimistic(pageSize);

	const changeUrlParams = useSetParams(searchParams);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (Number(e.target.value) > 0 && Number(e.target.value) < 101 ) {
		startTransition(() => {
			setOptimisticPageSize(Number(e.target.value));
		});
		router.push(`/tags?${changeUrlParams("pagesize", e.target.value)}`);
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
				value={optimisticPageSize}
				min={1}
				max={100}
			/>
		</div>
	);
};
