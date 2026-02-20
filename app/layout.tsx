import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaucer Blake | Aspiring AI Product Manager",
  description:
    "Chaucer Blake — Driving the future of AI from strategy to product. 7+ years of leadership, team building, and cross-functional expertise.",
  keywords: [
    "Chaucer Blake",
    "Product Manager",
    "AI",
    "Technology",
    "Leadership",
  ],
  openGraph: {
    title: "Chaucer Blake | Aspiring AI Product Manager",
    description:
      "Driving the future of AI from strategy to product.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-dark-text antialiased">{children}</body>
    </html>
  );
}
