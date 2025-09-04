import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Riddle Generator",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen min-w-screen bg-secondary px-0 md:px-[10%] lg:px-[20%]">
        {children}
      </body>
    </html>
  );
}
