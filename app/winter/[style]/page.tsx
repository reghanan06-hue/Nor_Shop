
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Winter from "../../components/Winter";
import Footer from "../../components/Footer";

const allowedStyles = ["classic", "sports", "modern"];

export default async function WinterStylePage({
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
        <Winter style={normalizedStyle} />
      </main>

      <Footer />
    </div>
  );
}
