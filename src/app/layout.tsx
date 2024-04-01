import { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
// import { Container, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { Header } from "@/ui/organisms/Header";

// import theme from "./theme";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Recruitment Task",
//   description:
//     "Tag browser provided by the Stack Overflow API  - solution of recruitment task to Mediporta Sp. z o.o.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* <StyledEngineProvider injectFirst> */}
        {/* <AppRouterCacheProvider options={{ key: "tailwindcss" }}> */}
          {/* <ThemeProvider theme={theme}> */}
          <Header />
          <main>
            {/* <Container maxWidth="lg"> */}
              <Suspense fallback={<Loading />}>{children}</Suspense>
            {/* </Container> */}
          </main>
          {/* </ThemeProvider> */}
        {/* </AppRouterCacheProvider> */}
        {/* </StyledEngineProvider> */}
      </body>
    </html>
  );
}

function Loading() {
  return <h2>🌀 Loading...</h2>;
}
