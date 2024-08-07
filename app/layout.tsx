import type { Metadata } from "next";
import { Signika_Negative } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeProvider";

const signika = Signika_Negative({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kumudu Mohottala",
  description: "Personal portfolio site - Kumudu Mohottala (data scientist, software engineer, tech enthusiast)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={signika.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
