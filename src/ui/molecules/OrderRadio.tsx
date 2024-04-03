import { OrderRadioField } from "../atoms/OrderRadioField";

export const OrderRadio = () => {
	const orderList = [
		{ name: "descending", param: "desc" },
		{ name: "ascending", param: "asc" },
	];

	return (
		<div className="w-36 px-3 py-2">
			<fieldset>
				<ul>
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
