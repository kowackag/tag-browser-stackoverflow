import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { SendFeedbackForm } from "@/ui/molecules/SendFeedbackForm/SendFeedbackForm";

export default async function FeedbackPage() {
	return (
		<SectionContainer>
			<SendFeedbackForm />
		</SectionContainer>
	);
}
