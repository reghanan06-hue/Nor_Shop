import About from "../components/About";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <About />
            <Footer/>
          </div>
  );
}