"use client";

import Navbar from "@/app/_components/navigations/navbar";
import Footer from "@/app/_components/navigations/footer";
import Contact from "@/app/_components/home/contact";
import Questions from "@/app/_components/home/questions";
import Stories from "@/app/_components/home/stories";
import Works from "@/app/_components/home/works";
import About from "@/app/_components/home/about";
import Partners from "@/app/_components/home/partners";
import Hero from "@/app/_components/home/hero";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Works />
      <Stories />
      <Questions />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePage;
