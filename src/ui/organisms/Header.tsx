// import { Box } from "@mui/material";
import { NavBar } from "@/ui/molecules/NavBar";

export const Header = () => {
  return (
    // <Box
    //   component="header"
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    <header className="border-b border-zinc-600 px-4 m-auto flex max-w-screen-2xl items-center justify-between">
      <NavBar />
    </header>
    // </Box>
  );
};
