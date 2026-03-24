import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-[#00338D] text-white relative overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 min-h-[600px] lg:min-h-[850px] grid lg:grid-cols-2 items-center gap-10">

        <div className="z-20 order-2 lg:order-1 pt-10 lg:pt-0">

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 mb-4 font-semibold">
            Accountants and Global Business Advisors
          </p>

          <h1 className="text-[34px] sm:text-[48px] lg:text-[72px] font-semibold leading-[1.1] tracking-tight mb-6">
            EMPOWERED
            <br />
            <span className="inline-block">
              WORKPLACES
              <span className="block w-full h-[2px] lg:h-[3px] bg-white mt-1"></span>
            </span>
          </h1>
          <p className="text-white/80 mb-10 max-w-md text-sm md:text-base leading-relaxed">
            by fostering inclusivity, encouraging growth, promoting collaboration,
            valuing diversity, supporting innovation, and building trust for shared success.
          </p>
          <button
            className="bg-[#FF7300] text-black font-semibold text-sm px-6 py-3 flex items-center gap-3 w-[200px] h-[48px] rounded-[8px] transition-transform hover:scale-105"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
            }}
          >
            <span className="text-lg">→</span>
            LETS CONNECT
          </button>
          <div className="mt-14 lg:mt-24">
            <p className="text-[10px] text-white/60 font-bold tracking-[0.2em] uppercase leading-relaxed max-w-md">
              ACCOUNTING, TAXATION & BUSINESS ADVISORY
              <br className="hidden md:block" />
              BETWEEN INDIA, JAPAN, AND THE WORLD
            </p>
          </div>

        </div>

        <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2">
          <div
            className="
              relative overflow-hidden shadow-2xl
              w-[280px] h-[240px]
              sm:w-[360px] sm:h-[300px]
              md:w-[500px] md:h-[420px]
              lg:w-[720px] lg:h-[620px]
              xl:w-[1900px] xl:h-[1220px]
              rounded-[40px] lg:rounded-[70px]
              lg:translate-x-0
              lg:-translate-y-15
            "
            style={{
              transform: "rotate(50deg)",
              backgroundColor: "#051C42",
            }}
          >
            <Image
              src="/herosection.png"
              alt="Office View"
              fill
              className="object-cover"
              style={{
                transform: "rotate(-40deg) scale(1.8) translateY(-40px)",
              }}
            />
          </div>

          <div className="absolute bottom-4 right-4 lg:-right-10 lg:bottom-6 flex items-center gap-3">

            <div className="flex -space-x-2 lg:-space-x-3">

              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-7 h-7 lg:w-10 lg:h-10 rounded-full border-2 border-white overflow-hidden shadow-lg"
                >
                  <Image
                    src={`/Ellipse${i}.png`}
                    alt="user"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}

              <div className="w-7 h-7 lg:w-10 lg:h-10 bg-[#FF7300] flex items-center justify-center rounded-full border-2 border-white text-[8px] lg:text-[10px] font-bold text-white">
                MORE
              </div>

            </div>

            <div>
              <p className="font-bold text-lg lg:text-2xl leading-none">
                250+
              </p>
              <p className="text-[9px] lg:text-[11px] text-white/70 uppercase font-bold">
                Enjoy Working <br /> with us
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}