"use client";

import { ChangeEvent, startTransition, useOptimistic } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { useSetParams } from "@/utils/useSetParams";

export const OrderRadioField = ({
	orderData,
}: {
	orderData: {
		name: string;
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
		<label
			htmlFor={orderData.param}
			className=" inline-flex items-center "
		>
			<input
				id={orderData.param}
				type="radio"
				checked={optimisticOrder === orderData.param}
				name="pagination"
				className="peer pt-2"
				onChange={handleChange}
				value={orderData.param}
			/>
			<p className="inline-flex items-center px-4 pt-1 text-sm peer-checked:font-bold peer-checked:text-sky-700">
				{orderData.name}
			</p>
		</label>
	);
};
