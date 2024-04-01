import Link from "next/link";

// import { Box } from "@mui/material";

import { Paths } from "@/utils/paths";

export const NavBar = () => {
  return (
    <nav
    // component="nav"
    // sx={{
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // }}
    >
      <Link href={Paths.HOME} className="underline py-8">
        {" "}
        Solution{" "}
      </Link>
      <Link href={Paths.TAGS}> Tag Browser </Link>
      <Link href={Paths.FEEDBACK}> Feedback </Link>
      <Link href={Paths.ABOUT}> About me </Link>
    </nav>
  );
};
