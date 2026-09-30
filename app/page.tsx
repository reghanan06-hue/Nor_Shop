import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 gap-2.5 dark:bg-black">
      <Navbar />
    </div>
  );
}