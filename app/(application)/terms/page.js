"use client";

import Navbar from "@/app/_components/navigations/navbar";
import Footer from "@/app/_components/navigations/footer";
import Terms from "@/app/_components/terms";

export const metadata = {
  title: "SmartRR - Terms & Conditions",
};

const TermsPage = () => {
  return (
    <main>
      <Navbar />
      <Terms />
      <Footer />
    </main>
  );
};

export default TermsPage;
