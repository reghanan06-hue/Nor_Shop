
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Spring from "../../components/Spring";
import Footer from "../../components/Footer";

const allowedStyles = ["classic", "sports", "modern"];

export default async function SpringStylePage({
  params,
}: {
  params: Promise<{ style: string }>;
}) {
  const { style } = await params;
  const normalizedStyle = style.toLowerCase();

  if (!allowedStyles.includes(normalizedStyle)) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col dark:bg-black">
      <Navbar />

      <main className="flex-1">
        <Spring style={normalizedStyle} />
      </main>

      <Footer />
    </div>
  );
}
