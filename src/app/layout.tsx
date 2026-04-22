import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";

export const metadata: Metadata = {
  title: "Altanika s.r.o. | Exteriéry na kľúč",
  description:
    "Záhradný dizajn, vizualizácie, realizácie, údržba, čistenie exteriérov.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}