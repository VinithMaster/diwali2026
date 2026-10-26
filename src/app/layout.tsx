import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "दीपावली मार्गदर्शिका २०२६ | पाँच दिनों का संपूर्ण मार्गदर्शन",
  description:
    "दीपावली के पाँच दिनों, पूजा-विधि, सामग्री, क्षेत्रीय परंपराओं और त्योहार की तैयारी के लिए सांस्कृतिक एवं व्यावहारिक मार्गदर्शिका।",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="hi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
