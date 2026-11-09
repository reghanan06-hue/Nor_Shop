import Navbar from "../components/Navbar";
import BenefitsPage from "../components/BenefitsPage";
import Contact from "../components/Contact";
import Footer from  "../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <Contact />
            <BenefitsPage/>
            <Footer/>
          </div>
  );
}