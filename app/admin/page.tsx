
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import AdminPage from "../components/AdminPage";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-0 dark:bg-black ">
            <Navbar />
            <AdminPage />
            <Footer/>
          </div>
  );
}