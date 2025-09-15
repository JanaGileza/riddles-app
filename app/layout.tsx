import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Riddle Generator",
  generator: "Next.js",
  description: "Test your knowledge by solving randomized riddles!",
  keywords: [
    "riddles",
    "random riddles",
    "random riddle generator",
    "riddle game",
    "random riddle game",
    "riddles app",
    "random riddle app",
    "riddle app",
  ],
  authors: [{ name: "Jana Gileza", url: "https://github.com/JanaGileza" }],
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
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
