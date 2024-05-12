import Navbar from "@/app/_components/navigations/navbar";
import Footer from "@/app/_components/navigations/footer";
import Privacy from "@/app/_components/privacy";

export async function generateMetadata() {
  return {
    title: "SmartRR - Privacy",
    openGraph: {
      title: "SmartRR - Privacy",
      url: "https://smartrrapp.org/privacy",
    },
    metadataBase: new URL("https://smartrrapp.org/privacy"),
  };
}

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
