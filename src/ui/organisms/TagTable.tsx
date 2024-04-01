// import * as React from "react";

// import {
//   TableHead,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
//   TableContainer,
//   Paper,
// } from "@mui/material";

// import { TagsResponseItem } from "@/api/types";

// export const TableTags = ({ tags }: { tags: TagsResponseItem[] }) => {
//   return (
//     <TableContainer sx={{ maxWidth: 1000, m: "auto" }} component={Paper}>
//       <Table size="small" aria-label="tags table">
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ py: 2 }} align="left">
//               Tag name
//             </TableCell>
//             <TableCell align="right">Count</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {tags.length ? (
//             tags.map((tag) => (
//               <TableRow
//                 key={tag.name}
//                 sx={{
//                   py: 3,
//                   "&:last-child td, &:last-child th": { border: 0 },
//                 }}
//               >
//                 <TableCell sx={{ py: 2 }} component="th" scope="row">
//                   {tag.name}
//                 </TableCell>
//                 <TableCell align="right">{tag.count}</TableCell>
//               </TableRow>
//             ))
//           ) : (
//             <Typography variant="subtitle1">There is no tags</Typography>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };
