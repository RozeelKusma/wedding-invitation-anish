import type { Metadata } from "next";
import { Allura, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const allura = Allura({
  weight: "400",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wedding Invitation",
  description: "Welcome to our wedding",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${allura.className} ${geistMono.variable} ${poppins.className} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
