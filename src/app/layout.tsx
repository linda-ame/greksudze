import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const display = Source_Serif_4({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grēksūdze",
  description:
    "Palīgs sirdsapziņas izmeklēšanai — dati paliek tikai Tavā ierīcē.",
  applicationName: "Grēksūdze",
  appleWebApp: {
    capable: true,
    title: "Grēksūdze",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lv">
      <body className={`${display.variable} ${body.variable} ${body.className}`}>
        {children}
      </body>
    </html>
  );
}
