// import { useSearchParams } from "next/navigation";
import { PageNumberField } from "../atoms/PageNumberField";

export const Pagination = ({ pageQuantity }: { pageQuantity: number }) => {
	const paginationButtons: number[] = Array.from(
		{ length: pageQuantity },
		(_num, ind) => ind + 1,
	);
	return (
		<nav
			className="mt-8 flex items-center justify-between border-t border-zinc-100 px-4 align-middle sm:px-0"
			aria-label="pagination"
		>
			<fieldset className="mx-auto">
				<ul className="md:flex">
					{paginationButtons.map((pageNumber) => (
						<li key={pageNumber} className="text-zinc-600">
							<PageNumberField pageNumber={pageNumber} />
						</li>
					))}
				</ul>
			</fieldset>
		</nav>
	);
};
