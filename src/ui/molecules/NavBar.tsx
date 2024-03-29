import { Box } from "@mui/material";
import Link from "next/link";
import { Paths } from "@/utils/paths";

export const NavBar = () => {
  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={Paths.HOME}> Solution </Link>
      <Link href={Paths.TAGS}> Tag Browser </Link>
      <Link href={Paths.FEEDBACK}> Feedback </Link>
      <Link href={Paths.ABOUT}> About me </Link>
    </Box>
  );
};
