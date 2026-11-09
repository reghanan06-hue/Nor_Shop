import BenefitsPage from "../components/BenefitsPage";
import ReviewCard from "../components/ReviewCard";
export default function AboutPage() {
  const sections = [
    {
      title: "About Nor Shop",
      content:
        "Welcome to Nor Shop, your destination for fashion and modern clothing.",
    },
    {
      title: "Website Launch & Purpose",
      content:
        "Our website was created to offer quality fashion and make shopping easier for our customers.",
    },
    {
      title: "Our Products & Reach",
      content:
        "We offer different collections adapted to every season.",
    },
    {
      title: "Quality & Customer Satisfaction",
      content:
        "Customer satisfaction and product quality are our priorities.",
    },
    {
      title: "Sales Channels",
      content:
        "Our products are available through our online platform.",
    },
    {
      title: "Commitment & Responsibility",
      content:
        "We are always committed to fulfilling our duties on time, with precision and integrity, and taking full responsibility.",
    },
  ];

  const statistics = [
    {
      number: "30,000+",
      label: "Satisfied Customers",
      color: "bg-[#d26a58]",
    },
    {
      number: "5Star",
      label: "5 Star Average Reviews",
      color: "bg-[#978c7b]",
    },
    {
      number: "200K",
      label: "Orders Shipped",
      color: "bg-[#978c7b]",
    },
    {
      number: "10Y",
      label: "Years on the Market",
      color: "bg-[#d26a58]",
    },
  ];

  return (
    <>
      {/* Title */}
      <div className="flex items-center justify-center text-[#d26a58] mt-6 md:mt-9">
        <h1 className="text-2xl md:text-5xl font-bold">
          About Us
        </h1>
      </div>

<main className="w-full min-w-0 overflow-x-hidden">
        {/* Accordion */}
        <section className="mx-auto mt-6 md:mt-10 w-full max-w-6xl px-4 md:px-8">
          {sections.map((section, index) => (
            <details
              key={index}
              className="group border-b border-gray-300 py-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-base md:text-lg font-medium">
                <span className="px-2 py-1 text-[#d26a58] hover:text-[#978c7b] transition-colors">
                  {section.title}
                </span>

                {/* Arrow down */}
                <span className="text-base text-[#d26a58] group-open:hidden">
                  ⌄
                </span>

                {/* Arrow up */}
                <span className="hidden text-base text-[#978c7b] group-open:inline">
                  ⌃
                </span>
              </summary>

              <div className="mt-3 md:mt-8 px-2 text-sm md:text-base text-[#978c7b]">
                <p>{section.content}</p>
              </div>
            </details>
          ))}
        </section>

        {/* Journal and Statistics */}
        <section className="mx-auto mt-10 mb-10 min-h-[400px] md:min-h-screen 
        w-full max-w-6xl rounded-b-4xl bg-[#FFF5F5] px-4 md:px-8 py-10 md:py-16">

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12">

            {/* Journal */}
            <div className="w-full md:w-1/2 flex flex-col justify-center md:mt-24">
              <h2 className="mb-4 text-xl font-bold text-[#d26a58]">
                Journal by the Numbers
              </h2>

              {/* Desktop : 👉 */}
<p className="hidden md:block text-[#978c7b]">
  Our milestones through the years 👉
</p>

{/* Mobile : 👇 */}
<p className="block md:hidden text-[#978c7b]">
  Our milestones through the years 👇
</p>

              <button
                type="button"
                className="mt-5 w-fit rounded-4xl bg-[#d26a58] px-4 py-2 text-white cursor-pointer hover:bg-[#d97462] hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300"
              >
                Buy journal
              </button>
            </div>

            {/* Statistics */}
            <div className="w-full md:w-2/3 grid grid-cols-2 gap-4 md:gap-5 md:mt-10">

              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className={`min-h-32 md:h-40 rounded-2xl ${stat.color} 
                  flex flex-col items-center justify-center font-bold shadow-lg 
                  hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 
                  transition-all duration-300`}
                >
                  <h3 className="text-2xl md:text-4xl font-bold text-white">
                    {stat.number}
                  </h3>

                  <p className="mt-2 text-center text-orange-100 text-xs md:text-sm px-2">
                    {stat.label}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </section>



        
{/* Review Section */}
<section className="w-full  mb-4">
  <ReviewCard />
</section>
<section className="w-full mb-16 md:mb-0">
  <BenefitsPage />
</section>
{/* <section className="w-full  mb-10">

  <ReviewCard />

  <BenefitsPage />
  </section> */}

      </main>
    </>
  );
}

