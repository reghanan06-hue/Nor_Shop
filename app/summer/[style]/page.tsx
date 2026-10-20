
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Summer from "../../components/Summer";
import Footer from "../../components/Footer";

const allowedStyles = ["classic", "sports", "modern"];

export default async function SummerStylePage({
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
        <Summer style={normalizedStyle} />
      </main>

      <Footer />
    </div>
  );
}
