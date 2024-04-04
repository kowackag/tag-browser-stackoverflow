import { SubTitle } from "./Title";

export const StackTechBlock = () => {
	const stackList = ["react", "next", "typescript", "tailwind", "vercel"];
	return (
		<ul>
			<SubTitle>Sollution</SubTitle>
			<p className="py-2">I decided to use the following main tech stack:</p>
			<ul className="flex justify-center py-6">
				{stackList.map((stack) => (
					<li key={stack} aria-labelledby={stack}>
						<svg className="m-2" width="80px" height="80px">
							<use href={`/icons.svg#${stack}`}></use>
						</svg>
					</li>
				))}
			</ul>
		</ul>
	);
};
