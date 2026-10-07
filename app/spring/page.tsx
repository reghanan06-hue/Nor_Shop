import Navbar from "../components/Navbar";
import Spring from "../components/Spring";
import Footer from  "../components/Footer";

export default function SpringPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <Spring />
            <Footer/>
          </div>
  );
}