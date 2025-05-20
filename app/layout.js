import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
         <Header/>
        </header>
        <div className={inter.className}>{children}</div>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}