import { FC, ReactNode } from "react";
import "./globals.scss";
import { Inter } from "next/font/google";

interface Props {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chat Boy",
  description: "messaging app",
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
