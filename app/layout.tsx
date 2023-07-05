import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Online Store",
  description:
    "An e-commerce application that allows users to browse and search for products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
        <Header />
        <main className="h-full">{children}</main></div>
      </body>
    </html>
  );
}
