import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { createClient, repositoryName } from "@/prismicio";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { PrismicPreview } from "@prismicio/next";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const post = await client.getSingle("settings");

  return {
    title: post.data.site_title,
    description: post.data.meta_description,
    openGraph: {
      images: [post.data.og_image.url || ""]
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(
      nunito.className,
      nunitoSans.className)}>
      <body
        className={`${nunito.variable} ${nunitoSans.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-100 z-[-1] inset-0 opacity-50 pointer-events-none">
          <PrismicPreview repositoryName={repositoryName} />
        </div>
      </body>
    </html>
  );
}
