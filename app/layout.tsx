import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "innerthought — The Next Interface Is Thought",
  description: "Subvocal AI headphones that turn inner monologue into conversation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}<SpeedInsights /><Analytics /></body>
    </html>
  );
}
