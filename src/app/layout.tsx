import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import { cormorant, inter } from "@/components/ui/fonts";

export const metadata: Metadata = {
  title: "YMG Movement | Young Men of God",
  description: "A movement of 18-35 year old Catholic men seeking the fullness of life that only Jesus can give.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col pattern-overlay">
        <Provider>
          <Navbar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
