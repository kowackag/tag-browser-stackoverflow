import { taskList } from "@/utils/tasks";

export const TaskTable = () => {
	return (
		<table className="w-full border-t border-zinc-200">
			<thead>
				<tr className="grid grid-cols-3  border-b border-l  border-r border-zinc-200 font-semibold">
					<th className="p-4">Task</th>
					<th className="col-span-2 p-4">Solution / remarks</th>
				</tr>
			</thead>
			<tbody data-testid="products-list">
				{taskList.map((task) => (
					<tr
						key={task.id}
						className="grid grid-cols-3 border-b border-l border-r md:border-zinc-200"
					>
						<td className="p-4 font-bold md:font-normal">{task.name}</td>
						<td className="order-2 col-span-2 p-4" data-testid="product-price">
							{task.solution}
							{task.id === 8 ? (
								<ul>
									<li>
										<a
											className="font-bold text-sky-600"
											href={task.ghPath}
											target="_blank"
										>
											{task.ghPath}{" "}
										</a>
									</li>
									<li>
										<a
											className="font-bold text-sky-600"
											href={task.vercelPath}
											target="_blank"
										>
											{task.vercelPath}
										</a>
									</li>
								</ul>
							) : null}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
