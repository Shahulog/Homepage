import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "しゃふろぐ",
  description: "適当に生きる！",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <body className={inter.className}>{children}</body>
      <footer>
        <p>Contact us at hello@example.com</p>
      </footer>
    </html>
  );
}