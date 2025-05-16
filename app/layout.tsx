import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen min-w-screen bg-primary px-0 md:px-[10%] lg:px-[20%]">
        {children}
      </body>
    </html>
  );
}
