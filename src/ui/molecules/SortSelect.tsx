"use client";

import { ChangeEvent, useState, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
// import Select, { type SelectChangeEvent } from "@mui/material/Select";

import { useSetParams } from "@/utils/useSetParams";

export const SortSelect = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sorted, setSorted] = useState(searchParams.get("sorted") ?? "popular");

  const changeUrlParams = useSetParams(searchParams);

  const handleChange = async (e:ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    startTransition(() => {
      const sortBy: string = e.target.value;
      setSorted(sortBy);
      router.push(`/tags?${changeUrlParams("sort", sortBy)}`);
    });
  };
  console.log(isPending);
  return (
    <div className="mx-2 ">
      {/* <FormControl fullWidth> */}
      <label htmlFor="sorted" className="block text-sm font-medium text-gray-900">Sort by</label>

        <select  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
          id="sorted"
          value={sorted}
        //   label="sort"
          onChange={handleChange}
        >
          <option className="inline-block py-4" value="popular" >Popular</option>
          <option value="activity">Activity</option>
          <option value="name">Name</option>
        </select>
      {/* </FormControl> */}
    </div>
  );
};
