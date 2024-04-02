import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { Paths } from "@/utils/paths";

export const NavBar = () => {
	const navigationLinks = [
		{ name: "Solution", href: Paths.HOME, exact: true },
		{ name: "Tag Browser", href: Paths.TAGS, exact: false },
		{ name: "Feedback", href: Paths.FEEDBACK, exact: false },
		// { name: "Tag Browser", href: Paths.TAGS, exact: false },
	];

	return (
		<nav className="flex md:justify-center">
			<ul className="flex items-center justify-center">
				{navigationLinks.map((link) => (
					<li className="px-2" key={link.href}>
						<ActiveLink
							href={link.href as Route}
							className="inline-block border-b-4 border-transparent px-2 py-6 hover:border-sky-600"
							activeClassName="text-sky-700 font-semibold"
							exact={link.exact ?? false}
						>
							{link.name}
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
