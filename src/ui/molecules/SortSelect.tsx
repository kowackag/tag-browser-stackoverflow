// "use client";
// import { useState, useTransition } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// import { Box, InputLabel, MenuItem, FormControl } from "@mui/material";
// import Select, { type SelectChangeEvent } from "@mui/material/Select";

// import { useSetParams } from "@/utils/useSetParams";

// export const SortSelect = () => {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const [sorted, setSorted] = useState(searchParams.get("sorted") ?? "popular");

//   const changeUrlParams = useSetParams(searchParams);

//   const handleChange = async (e: SelectChangeEvent<string>) => {
//     e.preventDefault();
//     startTransition(() => {
//       const sortBy: string = e.target.value;
//       setSorted(sortBy);
//       router.push(`/tags?${changeUrlParams("sort", sortBy)}`);
//     });
//   };
//   console.log(isPending);
//   return (
//     <Box sx={{ mx: 2, minWidth: 220 }}>
//       <FormControl fullWidth>
//         <InputLabel id="sorted">Sort</InputLabel>
//         <Select
//           labelId="demo-simple-select-label"
//           id="sorted"
//           value={sorted}
//           label="sort"
//           onChange={handleChange}
//         >
//           <MenuItem value="popular">Popular</MenuItem>
//           <MenuItem value="activity">Activity</MenuItem>
//           <MenuItem value="name">Name</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// };
