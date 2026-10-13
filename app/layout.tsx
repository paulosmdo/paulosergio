import type { Metadata, Viewport } from "next";
import { cacheLife } from "next/cache";
import localFont from "next/font/local";
import Link from "next/link";
import Nav from "./nav";
import "./globals.css";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const description =
  "Cientista da Computação apaixonado por resolver problemas, tecnologia e jogos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paulosergio.dev.br"),
  title: { default: "Paulo Sérgio", template: "%s · Paulo Sérgio" },
  description,
  openGraph: {
    title: "Paulo Sérgio",
    description,
    url: "/",
    siteName: "Paulo Sérgio",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a1a" },
  ],
};

async function Ano() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={satoshi.variable}>
      <body>
        <header>
          <Link className="title" href="/">
            <h1>Paulo Sérgio</h1>
          </Link>
          <Nav />
        </header>
        <main>{children}</main>
        <footer>
          <p>
            &copy; <Ano />, Paulo Sérgio
          </p>
        </footer>
      </body>
    </html>
  );
}
