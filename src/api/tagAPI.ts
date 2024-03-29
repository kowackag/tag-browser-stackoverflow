import { TagsUrlParams } from "@/utils/types";
import { TagsResponse } from "./types";
import { createUrl } from "./helpers";

const baseUrl = "https://api.stackexchange.com/2.3/tags?";

export const getTags = async (data: TagsUrlParams) => {
  const extendedUrl = createUrl(data);
  const res = await fetch(`${baseUrl}${extendedUrl}`, {});

  if (res.ok) {
    const tags = (await res.json()) as TagsResponse;
    return tags;
  } else {
    throw new Error("Failed to fetch data");
  }
};
