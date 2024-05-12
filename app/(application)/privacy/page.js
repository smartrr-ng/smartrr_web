"use client";

import Navbar from "@/app/_components/navigations/navbar";
import Footer from "@/app/_components/navigations/footer";
import Privacy from "@/app/_components/privacy";

export const metadata = {
  title: "SmartRR - Privacy",
};

const PrivacyPage = () => {
  return (
    <main>
      <Navbar />
      <Privacy />
      <Footer />
    </main>
  );
};

export default PrivacyPage;
