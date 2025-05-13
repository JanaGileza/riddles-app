import "./globals.css";
import { Almendra, Almendra_Display, Fira_Sans } from "next/font/google";

const almendra = Almendra({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-almendra",
});

const almendraDisplay = Almendra_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-almendra-display",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-fira-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${almendra.variable} ${almendraDisplay.variable} ${firaSans.variable}antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
