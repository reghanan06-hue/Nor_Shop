import Autumn from "../components/Autumn";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import FAQPage from "../components/FAQPage";
import BenefitsPage from "../components/BenefitsPage";

export default function AutumnPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <FAQPage />
              <BenefitsPage/>
            
            <Footer/>
          </div>
  );
}