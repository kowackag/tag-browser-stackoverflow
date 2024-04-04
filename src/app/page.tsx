import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { StackTechBlock } from "@/ui/atoms/StackTechBlock";
import { Title } from "@/ui/atoms/Title";
import { TaskTable } from "@/ui/molecules/TaskTable";

export default async function Home() {
	return (
		<SectionContainer>
			<Title>Introduction</Title>
			<p className="py-2">
				First of all I would like to thank you for your response and the
				opportunity to participate in the recruitment process for the Junior
				Frontend Developer possition.
			</p>
			<StackTechBlock />
			<TaskTable />
		</SectionContainer>
	);
}
