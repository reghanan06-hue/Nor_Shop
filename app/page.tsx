import Navbar from "./components/Navbar";
import Home from  "./components/Home";
import Footer from  "./components/Footer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black
    ">
      <Navbar />
      <Home />
      <Footer/>
    </div>
  );
  }
