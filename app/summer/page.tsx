import Summer from "../components/Summer";
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";

export default function SummerPage() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <Summer />
            <Footer/>
          </div>
  );
}