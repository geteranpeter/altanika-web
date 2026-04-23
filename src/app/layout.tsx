import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://altanika-web.vercel.app"),
  title: "Altanika s.r.o. | Záhradný dizajn, realizácie a exteriéry na kľúč",
  description:
    "Altanika s.r.o. prináša záhradný dizajn, projektovanie exteriéru, vizualizácie, realizácie, údržbu, čistenie exteriérov, terasy, altánky, zámkové dlažby, zrezávanie stromov a exteriéry na kľúč.",
  keywords: [
    "Altanika",
    "záhradný dizajn",
    "projektovanie exteriéru",
    "vizualizácie záhrad",
    "realizácia záhrady",
    "exteriér na kľúč",
    "údržba záhrad",
    "čistenie exteriérov",
    "čistenie striech a fasád",
    "čistenie fotovoltických panelov",
    "terasy a altánky",
    "zámkové dlažby",
    "zrezávanie stromov",
    "pilčícke úkony",
  ],
  authors: [{ name: "Altanika s.r.o." }],
  creator: "Altanika s.r.o.",
  publisher: "Altanika s.r.o.",
  applicationName: "Altanika",
  openGraph: {
    title: "Altanika s.r.o. | Exteriéry na kľúč",
    description:
      "Prémiové riešenia pre záhrady a exteriéry: návrh, vizualizácia, realizácia, údržba, čistenie a remeselné prvky pod jednou strechou.",
    url: "https://altanika-web.vercel.app",
    siteName: "Altanika s.r.o.",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/altanika-assets/hero-clean.jpg",
        width: 1600,
        height: 900,
        alt: "Altanika – prémiový exteriér a záhradný dizajn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Altanika s.r.o. | Exteriéry na kľúč",
    description:
      "Záhradný dizajn, realizácie, údržba, čistenie exteriérov a remeselné prvky v prémiovom štýle.",
    images: ["/altanika-assets/hero-clean.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
   shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
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