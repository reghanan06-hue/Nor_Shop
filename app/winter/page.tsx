import Navbar from "../components/Navbar";
import Winter from "../components/Winter";
import Footer from  "../components/Footer";

export default function WinterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <Winter />
            <Footer/>
          </div>
  );
}