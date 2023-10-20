import "./globals.css";
import { Inter } from "next/font/google";
import "./Styles/Style.css";
// import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Titulo",
  description: "Gestion de productos",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}