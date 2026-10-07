
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
export default function HomePage() {
  return
  (<div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
        <Navbar />
        <Home />
        <Footer/>
      </div>
);
}
    
