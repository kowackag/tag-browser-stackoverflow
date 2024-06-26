"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { type Route } from "next";
import clsx from "clsx";

type ActiveLinkProps<T extends string> = {
	href: Route<T>;
	children: React.ReactNode;
	activeClassName: string;
	className: string;
	exact?: boolean;
} & Omit<LinkProps<T>, "href">;

export const ActiveLink = <T extends string>({
	href,
	children,
	activeClassName,
	className,
	exact,
	...props
}: ActiveLinkProps<T>) => {
	const pathname = usePathname();
	const copyHref = href.split("?")[0] || href;
	const isActive = exact
		? pathname === href
		: !href.split("?")[0]
			? pathname.startsWith(href)
			: pathname.startsWith(copyHref);

	return (
		<Link
			href={href}
			className={clsx([className], {
				[activeClassName]: isActive,
			})}
			{...props}
		>
			{children}
		</Link>
	);
};
