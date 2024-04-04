import { type TagsResponseItem } from "@/api/types";

export const TableTags = ({ tags }: { tags: TagsResponseItem[] }) => {
 
	return (
		<div className="mt-12 overflow-x-auto rounded-md border shadow-sm">
			<table className="w-full  text-sm">
				<thead className="border-b bg-gray-50 font-medium text-zinc-600">
					<tr>
						<th className="px-6 py-3 text-left">Tag</th>
						<th className="px-6 py-3 text-right">Count</th>
					</tr>
				</thead>
				<tbody className="divide-y text-zinc-600">
					{tags.length ? (
						tags.map((tag, idx) => (
							<tr key={`${tag.name}-${idx}`}>
								<td className="whitespace-nowrap px-6 py-4">{tag.name}</td>
								<td className="whitespace-nowrap px-6 py-4 text-right">
									{tag.count}
								</td>
							</tr>
						))
					) : (
						<tr>
							<td className="whitespace-nowrap px-6 py-4">No tags was found</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};
