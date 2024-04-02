import { type TagsResponse } from "./types";
import { createUrl } from "./helpers";
import { type TagsUrlParams } from "@/utils/types";

const baseUrl = "https://api.stackexchange.com/2.3/tags?site=stackoverflow";

export const getTags = async (params: TagsUrlParams) => {
	const extendedUrl = createUrl(params);
	const res = await fetch(
		`${baseUrl}${extendedUrl}&key=H2vh4dYyOoyp0JqE*lU4VQ((`,
	);

	if (res.ok) {
		const tags = (await res.json()) as TagsResponse;
		return tags;
	} else {
		throw new Error("Failed to fetch data");
	}
	// const tags = {
	// 	items: [],
	// };
	// return tags;
};
