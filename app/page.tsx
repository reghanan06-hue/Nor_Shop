import Navbar from "./components/Navbar";
import Home from  "./components/Home";
export default function App() {
  return (
    <div className="flex min-h-screen flex-col items-center  gap-2.5 dark:bg-black
    ">
      <Navbar />
      <Home />
    </div>
  );
  }
