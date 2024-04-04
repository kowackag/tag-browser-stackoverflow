"use client";

import { useFormState } from "react-dom";

import { sendFeedback } from "./actions";
import { StarsRadioField } from "@/ui/atoms/StarsRadioField";
import { SendFeedbackButton } from "@/ui/atoms/SendFeedbackButton";

export const SendFeedbackForm = () => {
	const [_state, formAction] = useFormState(
		(_prevState: unknown, formData: FormData) => {
			return sendFeedback(formData);
		},
		null,
	);

	return (
		<form data-testid="add-review-form" action={formAction}>
			<div className="text-sm">
				<p className="inline-block pt-2">Rating</p>
				<StarsRadioField />
			</div>
			<div className="text-sm">
				<label className="inline-block pt-2" htmlFor="content">
					Comment
				</label>
				<textarea
					id="content"
					name="content"
					required
					className="block w-full border p-2 outline-none"
				/>
			</div>
			<div className="text-sm">
				<label className="inline-block pt-2" htmlFor="name">
					Name
				</label>
				<input
					id="name"
					name="name"
					required
					className="block w-full border p-2 outline-none"
				/>
			</div>
			<SendFeedbackButton />
		</form>
	);
};
