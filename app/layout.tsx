import "@/app/styles/style/main.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ProfiCard"
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
