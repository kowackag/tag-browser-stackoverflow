import * as zod from "zod";

export const feedbackSchema = zod.object({
	content: zod.string().min(3).max(1000),
	name: zod.string().min(3),
	rating: zod.string(),
});

export type CommentFormData = zod.TypeOf<typeof feedbackSchema>;
