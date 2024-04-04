import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { Title } from "@/ui/atoms/Title";
import { SendFeedbackForm } from "@/ui/molecules/SendFeedbackForm/SendFeedbackForm";

export default async function FeedbackPage() {
	return (
		<SectionContainer>
			<div>
				<Title>Thank you for visit my page.</Title>
				<p className="py-4">
					I would be very gratefull if you could give me any feedback that will
					help me improve my skills and qualifications
				</p>
				<SendFeedbackForm />
			</div>
		</SectionContainer>
	);
}
