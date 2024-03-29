import { Box } from "@mui/material";
import { NavBar } from "../molecules/NavBar";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavBar />
    </Box>
  );
};
