import { OrderRadioField } from "@/ui/atoms/OrderRadioField";

export const SortOrderRadio = () => {
	const orderList = [
		{ href: "/icons.svg#arrow-down", param: "desc" },
		{ href: "/icons.svg#arrow-up", param: "asc" },
	];

	return (
		<div className="px-2 pt-2">
			<fieldset>
				<ul className="flex">
					{orderList.map((order) => (
						<li key={order.param} className="text-zinc-600">
							<OrderRadioField orderData={order} />
						</li>
					))}
				</ul>
			</fieldset>
		</div>
	);
};
