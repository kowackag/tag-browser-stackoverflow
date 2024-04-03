import { OrderRadio } from "@/ui/molecules/OrderRadio";
import { SortSelect } from "@/ui/molecules/SortSelect";
import { PageSizeInput } from "@/ui/atoms/PageSizeInput";

export const TagParamsForm = () => {
	return (
		<form
			className="items-end justify-center md:flex"
		>
			<PageSizeInput />

			<SortSelect />
			<OrderRadio />
		</form>
	);
};
