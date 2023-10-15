"use client";
import "../styles/globals.css";
import "../styles/mediaQuery.css";
import { Inter, Montserrat } from "next/font/google";
import { Provider } from "react-redux";
// import { store } from "../state/store";
// import { client } from "@/apollo";
// import { ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
// import AOS from "aos";
import "aos/dist/aos.css";
const inter = Inter({ subsets: ["latin"] });
import Head from "next/head";
import Script from "next/script";
// import Footer from "@/components/Footer/Footer";
// import ScrollToTopButton from "@/components/ScrollTop";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--montserrat",
  display: "swap",
});

export default function RootLayout({ children }) {
  useEffect(() => {
    // AOS.init();
  }, []);

  return (
    <html lang="en">
      <Head />

      <meta
        name="google-site-verification"
        content="7_WJ0a1shqr0eVq7IdQSyBNNK_7UfbvC7DHlJKPHYls"
      />
      <body
        className={`${inter.className} ${montserrat.variable} font-Montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
