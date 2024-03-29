import { Typography } from "@mui/material";
import Container from "@mui/material/Container";

export default async function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" sx={{ my: 2 }}>
        Recruitment Task
      </Typography>
    </Container>
  );
}
