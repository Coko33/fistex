import "./globals.css";
import { Inter } from "next/font/google";
import { Abel } from "next/font/google";
import Navbar from "../components/Navbar";

const inter = Inter({ weight: "500", subsets: ["latin"] });
const abel = Abel({ weight: "400", subsets: ["latin"] });

//openGraph - para vista previa en whatsapp etc
export const metadata = {
  title: "Fistex",
  description: "pagina en construcción",
  keywords: "telas, industrial, teñidos ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={abel.className}>{children}</body>
    </html>
  );
}
