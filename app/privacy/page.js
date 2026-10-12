import Navbar from "../components/Navbar";
import Privacy from "../components/PrivacyPage";
import Footer from  "../components/Footer";
import BenefitsPage from "../components/BenefitsPage"
export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <Privacy />
            <BenefitsPage/>
            <Footer/>
          </div>
  );
}