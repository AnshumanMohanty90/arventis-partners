import type { Metadata } from "next";
import "./globals.css";
import ScrollProvider from "./components/ScrollProvider";
import IntroManager from "./components/IntroManager";

export const metadata: Metadata = {
  title: "Arventis & Partners | Strategy & Legal Counsel",
  description: "Elite advisory for the architecture of international commerce and the preservation of legal integrity. Navigating complexity with surgical precision and unwavering advocacy.",
  keywords: ["Consulting", "Strategy", "Legal Counsel", "Sovereign Operations", "Corporate Advisory", "Arventis"],
  authors: [{ name: "Arventis & Partners" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased selection:bg-[#c5a880] selection:text-[#081226]"
    >
      <body className="min-h-full bg-[#081226] text-white flex flex-col font-sans">
        <IntroManager />
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
