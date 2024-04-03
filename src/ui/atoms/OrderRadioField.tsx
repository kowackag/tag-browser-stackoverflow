"use client";

import { type ChangeEvent, startTransition, useOptimistic } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useSetParams } from "@/utils/useSetParams";

export const OrderRadioField = ({
	orderData,
}: {
	orderData: {
		href: string;
		param: string;
	};
}) => {
	const router = useRouter();
	const searchParams = useSearchParams();

	const changeUrlParams = useSetParams(searchParams);

	const [optimisticOrder, setOptimisticOrder] = useOptimistic<string>(
		searchParams.get("order") ?? "asc",
	);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();

		if (e.target.value)
			startTransition(() => {
				setOptimisticOrder(e.target.value);
			});

		router.push(`/tags?${changeUrlParams("order", e.target.value)}`);
	};

	return (
		<label htmlFor={orderData.param} className="h-11 inline-flex items-center outline-none">
			<input
				id={orderData.param}
				type="radio"
				checked={optimisticOrder === orderData.param}
				className="peer sr-only pt-2"
				onChange={handleChange}
				value={orderData.param}
				aria-labelledby={orderData.param}
			/>
			<svg
				className="left-0 top-0 peer-checked:text-sky-600 "
				width="24px"
				height="24px"
			>
				<use href={orderData.href}></use>
			</svg>
		</label>
	);
};
