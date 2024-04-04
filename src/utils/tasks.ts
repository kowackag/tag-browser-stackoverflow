export const taskList = [
	{
		id: 1,
		name: "A paged tags table with numbers of related posts ",
		solution:
			"I have used Next.js App Router to '/tags' routes with dynamic Segment on route app/tags/[page]. A Pagination and custom hook usePagination() have been created. All 'visible' page number will be prefetched when '/tags/  ",
	},
	{
		id: 2,
		name: "Configurable number of elements on a page ",
		solution: "To handle change input field I have created useDebounced().",
	},
	{
		id: 3,
		name: "The elements to sort tags (sord by and sort order)",
		solution:
			"Two separated Client components have been created with select and radio field. On change the field appropierate query params are added to paths. To handle this I have used usePathname, useRouter, useSearchParams from 'next/navigation'. Moreover I have created custom hooks useSetParams().",
	},
	{
		id: 4,
		name: "API - handling data loading and errors  states",
		solution:
			"I have used build in Next.js solutions such as erros.tsx, loadind.tsx. The routes and nested children are wrapped in a React Eror Boundry",
	},
	{
		id: 5,
		name: "Use some library of UI components, e.g. MUI",
		solution:
			"Because of the fact that I have decided to build app in Next.js, the first thought was using Tailwind and Tailwind UI. The downside of Tailwind UI is the limited base of free components hovever core upsides of Tailwind css is possibility to fast create components usung class. Moreover I have used build in Next.js Component such as notFound().",
	},
	{
		id: 6,
		name: "Manage state",
		solution:
			"Firstly I was thinking about using React context to keep app state, hovewer in this app only state is that one that is concening query params. The stackexchange api is constructed and prepared really well and fetching data (tags)  is following in small packes so I have decided not to keep fetching data in react state. Next I took in to consideration local storage to keep query params during switching by pages. I would probably implement it if app was beeing developed. In my opinion the best solution was keeping params in path. Thanks to this users may share the URL and seems to be the easiest (easy solve the problem) and quickest solutien for developers suitable for such an application.",
	},
	{
		id: 7,
		name: "Prepare a Storybook to create stories and present application components",
		solution:
			"Unfortunately I have partly managed this task due to lack of the time and small knowledge of this workshop. However I have studied docs and managed to prepare the working environment. I am sure that I will get to know it better because Storybook has inspired me.",
	},
	{
		id: 8,
		name: "Publish the sollution on the GitHub repositories",
		solution:
			"Repossitory has been created and published on GitHub. Moreover it has beed deployed on Vercel",
		ghPath: "https://github.com/kowackag/tag-browser-stackoverflow",
		vercelPath: "https://tag-browser-stackoverflow.vercel.app/",
	},
];
