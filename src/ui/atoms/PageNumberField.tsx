"use client";

import { ChangeEvent, startTransition, useOptimistic } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useSetParams } from "@/utils/useSetParams";

export const PageNumberField = ({ pageNumber }: { pageNumber: number }) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const changeUrlParams = useSetParams(searchParams);

	const [optimisticPageActive, setOptimisticPageActive] = useOptimistic<number>(
		searchParams.get("page") ? Number(searchParams.get("page")) : 1,
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		if (!e.target.dataset?.page) return;
		startTransition(() => {
			setOptimisticPageActive(Number(e.target.dataset.page));
		});
		router.push(`/tags?${changeUrlParams("page", e.target.dataset.page)}`);
	};

	return (
		<label
			htmlFor={`page-${pageNumber}`}
			className="relative inline-flex items-center border-t-4  border-transparent text-sm hover:border-sky-600"
		>
			<input
				id={`page-${pageNumber}`}
				type="radio"
				checked={optimisticPageActive === pageNumber}
				name="pagination"
				className="peer sr-only"
				onChange={handleChange}
				data-page={pageNumber}
			/>
			<p
				className="inline-flex items-center border-t-4 border-transparent px-6 py-4 text-sm peer-checked:font-bold peer-checked:text-sky-700"
				aria-label={`Page ${pageNumber}`}
			>
				{pageNumber}
			</p>
		</label>
	);
};
