import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fira_Code } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Portfolio - Muhammad Raihan Wahyu Yuwono",
  description: "Portfolio - Muhammad Raihan Wahyu Yuwono",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </ThemeProvider>
    </html>
  );
}
