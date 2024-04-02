"use client";

import { useFormStatus } from "react-dom";
import { Loader2 as IconLoader } from "lucide-react";

export function SendFeedbackButton() {
	const status = useFormStatus();

	return (
		<button
			type="submit"
			className={`relative my-6 inline-flex min-h-10 items-center justify-center rounded border border-current px-3 py-2 font-medium text-sky-600 transition-all duration-500 hover:text-sky-400 disabled:cursor-not-allowed disabled:opacity-50`}
			disabled={status.pending}
		>
			Send feedback
			{status.pending && (
				<IconLoader className="absolute left-14 top-2 h-6 w-6 animate-spin" />
			)}
		</button>
	);
}
