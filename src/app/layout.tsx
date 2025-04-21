import type {Metadata} from "next";
import "./globals.css";
import img from "./CNUk9psVgu.png";

export const metadata: Metadata = {
  title: "장기영♥구소라 결혼식 초대장",
  description: "2025년 5월 31일 토요일, 낮 12시 한성교회(한성중화기독교회)",
  openGraph: {
    images: img.src
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
