import Navbar from "@/app/_components/navigations/navbar";
import Footer from "@/app/_components/navigations/footer";
import Privacy from "@/app/_components/privacy";

export async function generateMetadata() {
  return { title: "SmartRR - Privacy" };
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
