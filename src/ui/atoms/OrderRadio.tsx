import { OrderRadioField } from "./OrderRadioField";

export const OrderRadio = () => {
    const orderList = [
       {name: "ascending", param: 'asc' },
       {name: "descending", param: 'desc' }
    ]

	return (
		<div
			className="w-36 px-3 py-2"
		>
			<fieldset>
				<ul >
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
