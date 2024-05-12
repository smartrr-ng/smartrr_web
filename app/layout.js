import "bootstrap/dist/css/bootstrap.css";
import "@/app/_components/styles/styles.css";
import BootstrapClient from "@/app/_components/bootstrap_client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const baseURL = "https://smartrrapp.org/";
const title = "SmartRR";
const description =
  "SmartRR is a virtual one stop shop for Gender Based Violence and Sexual Reproductive Health. We are committed to creating a safer, more supportive world for survivors and adolescent girls.";

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
    type: "website",
    images: "/logos/logo.png",
    url: baseURL,
  },
  metadataBase: new URL(baseURL),
  manifest: "/logos/site.webmanifest",
  icons: {
    icon: ["/logos/logo.png"],
    apple: ["/logos/logo.png"],
    shortcut: ["/logos/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image:width" content="1277" />
        <meta property="og:image:height" content="473" />
        <meta name="theme-color" content="#F28907" />
        <meta property="og:site_name" content={title} />
        <meta name="author" content={title} />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
