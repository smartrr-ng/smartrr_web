import Navbar from "@/app/_components/navigations/navbar";
import Footer from "@/app/_components/navigations/footer";
import Terms from "@/app/_components/terms";

export async function generateMetadata() {
  return {
    title: "SmartRR - Terms & Conditions",
    openGraph: {
      title: "SmartRR - Terms & Conditions",
      url: "https://smartrrapp.org/terms",
    },
    metadataBase: new URL("https://smartrrapp.org/terms"),
  };
}

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
