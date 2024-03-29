import { Container } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const PaginationOutlined = () => {
  return (
    <Container sx={{ my: 4, mx: "auto" }}>
      <Stack spacing={2}>
        <Pagination count={10} variant="outlined" color="primary" />
      </Stack>
    </Container>
  );
};
