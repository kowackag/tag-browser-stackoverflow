import { SectionContainer } from "@/ui/atoms/SectionContainer";
import { SendFeedbackForm } from "@/ui/molecules/SendFeedbackForm/SendFeedbackForm";

export default async function FeedbackPage() {
	return (
		<SectionContainer>
            <p>Thank you for visit my page. I would be very gratefull if you could give me any feedback to </p>
			<SendFeedbackForm />
		</SectionContainer>
	);
}
