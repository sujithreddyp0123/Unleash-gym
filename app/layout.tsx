import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unleash — Your goals. Your plan.",
  description: "Personal workouts, nutrition and recovery with your private fitness profile.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
