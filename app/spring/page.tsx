import Navbar from "../components/Navbar";
import Spring from "../components/Spring";
import Footer from "../components/Footer";

export default function SpringPage() {
  return (
    <div className="flex min-h-screen flex-col dark:bg-black">
      <Navbar />

      {/* <main className="flex-1">
        <Spring style="sports" />
      </main> */}

      <Footer />
    </div>
  );
}