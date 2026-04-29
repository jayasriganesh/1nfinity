import { pub } from "@/lib/publicPath";

const stats = [
  { value: "6500+", label: "Total Employees" },
  { value: "30", label: "Average Age" },
  { value: "60%", label: "R&D Engineer" },
  { value: "US$ 3b", label: "Revenue" },
] as const;

export function AboutMaxhub() {
  return (
    <section
      className="relative flex w-full items-center bg-cover bg-center py-16 md:py-0"
      style={{
        minHeight: "500px",
        backgroundImage: `url(${pub('/images/about/about-bg.jpg')})`,
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1230px] px-4 md:px-[15px]">
        <div className="max-w-[600px]">
          <h2 className="mb-5 font-heading text-[24px] md:text-[32px] leading-[36px] md:leading-[48px] font-bold uppercase text-white">
            ABOUT MAXHUB
          </h2>

          <p className="mb-5 text-[14px] leading-[21px] text-white/85">
            As an innovation-driven team, MAXHUB focuses on developing
            collaboration solutions that enable immersive communications. Since
            established in 2017, we have enhanced team creativity and
            productivity worldwide by providing advanced audio-visual
            technologies and one-stop solutions.
          </p>

          <p className="mb-5 text-[14px] leading-[21px] text-white/85">
            MAXHUB Ecosystem focuses on a total solution for complete scenarios.
            From smart Interactive Displays, to high-quality UC products, to
            ground-breaking all-in-one LED and eye-catching Digital Signage, to
            Mobile Stands for flexible work, we&apos;ve got you covered.
          </p>

          <a
            href="#"
            className="mb-[60px] inline-flex items-center rounded-[5px] bg-[#196FD2] px-[30px] pt-[18px] pb-[14px] text-sm text-white transition-colors hover:bg-[#196FD2]/90"
          >
            Learn More
            <span className="ml-2">&gt;</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:flex gap-6 md:gap-[60px]">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-heading text-[36px] leading-[54px] font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-[5px] text-[14px] text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
