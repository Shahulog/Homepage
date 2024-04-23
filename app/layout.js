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
      <body>
        <header>
          <h3>しゃふろぐ ─Shahu log─</h3>
        </header>
        <div className={inter.className}>{children}</div>
        <footer>
          <p>Contact us at X <a href="https://twitter.com/Shahu_log">@Shahu_log</a></p>
        </footer>
      </body>
    </html>
  );
}