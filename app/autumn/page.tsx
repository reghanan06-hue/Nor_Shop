import Autumn from "../components/Autumn";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";

export default function AutumnPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <Autumn />
            <Footer/>
          </div>
  );
}