import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Ajay Swaminathan - Product Manager",
  description: "Founder-turned PM who builds with instinct. Based in Munich, Germany.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Epilogue:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
