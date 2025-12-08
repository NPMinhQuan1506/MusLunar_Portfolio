import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MusLunar",
  description: "Role-personalized portfolio experience."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
