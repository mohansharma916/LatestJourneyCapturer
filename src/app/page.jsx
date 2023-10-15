"use client";
import Image from "next/image";
import Header from "./home/components/Header/Header";
import Head from "next/head";
import Section1 from "@/app/home/components/Section1";
import UpcomingTrips from "@/app/home/components/UpcomingTrips";
import MainPageContent from "@/app/home/components/MainPageContent";
import HowItWorks from "@/app/home/components/HowItWorks";
import WelcomeSection from "@/app/home/components/WelcomeSection";
import Footer from "@/app/home/components/Footer";
import Testimonials from "@/app/home/components/Testimonials";
import Faq from "@/app/home/components/Faq";
const Home = () => {
  return (
    <>
      <Head />
      <title>Travel For Free Around The World | Record Your Jouney</title>
      {/* <meta name="text" content="planetsera" />
      <meta
        name="title"
        content="Buy Best Spices From Affordable Online Spices Store | planetsera"
      />
      <meta
        name="description"
        content="Planetsera Masala is a centre for the authentic flavours of India. Today, we are India’s favourite for our spicy masalas and best delicious Spices!"
      />
      <meta
        name="keywords"
        content="sabji masala , mix masala powder , sabji masala powder , sabzi masala , best sabji masala , vegetable masala powder , red chilli , red chilli powder , chili powder , lal mirch powder , mirch powder , garam masala , garam masala ingredients , whole garam masala , black pepper powder , pepper powder , kali mirch powder , black chilies , coriander powder , dhaniya powder , dhania powder , whole coriander , dried coriander , turmeric powder , haldi powder , turmeric uses , organic turmeric powder , turmeric powder benefits , haldi packet , chaat masala , masala spices , chaat masala ingredients , chaat masala powder , masala chat , spices online , amchur powder , masala powder , amchoor powder , mango powder , cumin powder , food spices , jeera powder , masala powder , jeera powder price , spice powder , food spices , meat masala , meat masala ingredients"
      />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.planetsera.com" />
      <meta property="og:url" content="https://www.planetsera.com" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Buy Best Spices From Affordable Online Spices Store | planetsera"
      />
      <meta
        property="og:description"
        content="Planetsera Masala is a centre for the authentic flavours of India. Today, we are India’s favourite for our spicy masalas and best delicious Spices!"
      />
      <meta
        name="og_site_name"
        property="og:site_name"
        content="planetsera.com"
      />
      <meta property="og:image" content="banner image url" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="planetsera.com" />
      <meta property="twitter:url" content="https://www.planetsera.com" />
      <meta
        name="twitter:title"
        content="Buy Best Spices From Affordable Online Spices Store | planetsera"
      />
      <meta
        name="twitter:description"
        content="Planetsera Masala is a centre for the authentic flavours of India. Today, we are India’s favourite for our spicy masalas and best delicious Spices!"
      />
      <meta name="twitter:image" content="banner image url" /> */}
      <Header />
      <Section1 />
      <MainPageContent />
      <HowItWorks />
      <WelcomeSection />
      <UpcomingTrips />
      <Testimonials />
      {/* <Faq /> */}
      <Footer />
    </>
  );
};

export default Home;
