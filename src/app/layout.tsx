import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Altanika s.r.o. | Exteriéry na kľúč",
  description:
    "Záhradný dizajn, vizualizácie, realizácie, údržba, čistenie exteriérov, stromy a remeselné prvky pod jednou strechou.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}