import { usePagination } from "@/utils/usePagination";
import { ActiveLink } from "../atoms/ActiveLink";
import { Route } from "next";

export const Pagination = ({
	currentPage,
	totalTags,
	pageSize,
}: {
	currentPage: number;
	totalTags: number;
	pageSize: number;
}) => {
	console.log(currentPage);
	const paginationRange = usePagination({
		currentPage: currentPage,
		totalCount: totalTags,
		pageSize: pageSize,
	});

	if (!paginationRange) return;

	return (
		<nav
			className="mt-8 flex items-center justify-between border-t border-zinc-100 px-4 align-middle sm:px-0"
			aria-label="pagination"
		>
			<ul className="mx-auto hidden md:-mt-px md:flex">
				{paginationRange.map((pageNumber, ind) =>
					pageNumber === "..." ? (
						<span key={`dot-${ind}`} className="inline-block py-4">
							...
						</span>
					) : (
						<li key={pageNumber}>
							<ActiveLink
								href={`/tags/${pageNumber}` as Route}
								className="inline-flex items-center border-t-4 border-transparent px-6 py-4 text-sm  hover:border-sky-600"
								activeClassName="text-sky-700 font-semibold"
								exact={true}
								aria-label={`pagination ${pageNumber}`}
							>
								{pageNumber}
							</ActiveLink>
						</li>
					),
				)}
			</ul>
		</nav>
	);
};
