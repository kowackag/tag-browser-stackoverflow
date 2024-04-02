"use server";

import { Resend } from "resend";
import { feedbackSchema } from "./feedbackSchema";
import { revalidateTag } from "next/cache";

export type AddCommentActionTypes<TData = unknown> =
	| {
			success: false;
			errors: {
				content?: string[] | undefined;
				rating?: string[] | undefined;
				name?: string[] | undefined;
			};
	  }
	| {
			success: true;
			data: TData;
	  };
export const sendFeedback = async (data: FormData) => {
	if (!process.env.RESEND_API_KEY) {
		throw TypeError("I am sorry :( something were wrong");
	}
	const resend = new Resend(process.env.RESEND_API_KEY);

	const parsedData = await feedbackSchema.safeParseAsync(
		Object.fromEntries(data),
	);

	if (parsedData.success) {
		const data = {
			rating: Number(parsedData.data.rating),
			content: parsedData.data.content,
			name: parsedData.data.name,
		};

		await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "kowackag@gmail.com",
			subject: "Recruitment task - Feedback",
			html: `<p>Rating: ${data.rating} </p><p>Comment: ${data.content}</p><p>Comment: ${data.name}</p>`,
		});
		revalidateTag("feedback");
		return {
			success: true,
			errors: false,
		};
	} else {
		console.log(parsedData.error.flatten().fieldErrors);
		return {
			success: false,
			errors: parsedData.error.flatten().fieldErrors,
		};
	}
};
