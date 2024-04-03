"use client";

import { useState } from "react";

export const StarsRadioField = () => {
	const [rating, setRating] = useState(1);

	const starsList = [
		{value:1, id: 'first'},
		{value:2, id: 'second'},
		{value:3, id: 'third'},
		{value:4, id: 'fourth'},
		{value:5, id: 'fifth'},
	]
	return (
		<div className="flex py-4 text-zinc-800">
			{starsList.map(star=>(
							<label
							key={star.id}
							className="relative px-1 text-center"
							htmlFor={star.id}
						>
							<input
								className="fixed opacity-0"
								type="radio"
								id={star.id}
								aria-label={star.id}
								name="rating"
								value={star.value}
								onClick={() => setRating(star.value)}
							/>
							<svg className="left-0 top-0" width="24px" height="24px">
								<use
									className={`${rating >= star.value ? "fill-amber-500" : "fill-none"}`}
									href="/icons.svg#star"
								></use>
							</svg>
						</label>
			))}
		</div>
	);
};
