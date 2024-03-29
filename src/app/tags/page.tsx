import { Box, Typography } from "@mui/material";
import { PaginationOutlined } from "@/ui/molecules/PaginationOutlined";
import { SortSelect } from "@/ui/molecules/SortSelect";
import { TableTags } from "@/ui/organisms/TagTable";
import { TagsOnPageInput } from "@/ui/atoms/TagsOnPageInput";
import { getTags } from "@/api/tagAPI";

export default async function Tags() {
  const data = await getTags({});
 
  console.log(data)
 
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Typography variant="h4" component="h1" sx={{ my: 2 }}>
        Stack Overflow API - Tag browser
      </Typography>
      <div>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "& .MuiTextField-root": { my: 4, width: "25ch" },
          }}
          autoComplete="off"
        >
          <SortSelect />
          <TagsOnPageInput />
        </Box>

        <TableTags />
        <PaginationOutlined />
      </div>
    </Box>
  );
}
