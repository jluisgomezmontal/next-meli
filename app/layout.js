import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Meli Test",
  description: "Aplicacion de prueba de mercado libre",
  keywords:
    "Tienda, online, ecommerce, mercado libre, tienda online, tecnologia",
  generator: "Next.js",
  applicationName: "Prueba de mercado libre",
  author: [
    {
      name: "Jose Luis Gomez Montalvan",
      url: "https://github.com/jluisgomezmontal",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
