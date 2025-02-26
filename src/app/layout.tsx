import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";
import { Navbar } from "@/components/ui/navbar";
import { Main } from "@/components/ui/main";
import { Footer } from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Bunnyfied Labs",
  description: "Bunnyfied Labs Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Provider>
          <Flex direction="column" flex="1">
            <Head>
              <title>YMG</title>
            </Head>
            <Navbar />
            <Main>
              {children}
            </Main>
            <Footer />
          </Flex>
        </Provider>
      </body>
    </html>
  );
}