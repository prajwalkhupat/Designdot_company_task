import Image from "next/image";

export default function InsightsSection() {
  return (
    <section className="w-full bg-white">

      
      <div className="lg:hidden px-5 py-12">

        <div className="mb-8">
          <div className="w-[180px] h-[160px] bg-[#EEEEEE] rounded-[20px] flex items-end p-5">
            <h2 className="font-semibold text-[20px] leading-tight">
              INSPIRATION & <br /> INSIGHTS
            </h2>
          </div>
        </div>

        <div className="space-y-6 mb-10">

          <div className="border-b-2 border-[#00338D] pb-3">
            <h3 className="text-[15px] font-semibold text-[#00338D] mb-2">
              Pre-market Entry
            </h3>
            <p className="text-[13px] text-[#00338D]">
              Pre-market entry means trading securities before regular market
              hours to react to overnight news, with lower liquidity and wider spreads.
            </p>
          </div>

          <div className="border-b-2 border-gray-400 pb-3">
            <h3 className="text-[15px] font-semibold mb-2">
              Market Entry
            </h3>
            <p className="text-[13px]">
              Research demand, assess competition, choose mode, localize offering,
              comply regulations, price strategically, partner locally, iterate learning.
            </p>
          </div>

          <div className="border-b-2 border-gray-400 pb-3">
            <h3 className="text-[15px] font-semibold mb-2">
              Operations
            </h3>
            <p className="text-[13px]">
              Planning, organizing, and managing processes to efficiently produce goods
              or services, ensuring quality and customer satisfaction.
            </p>
          </div>

          <div className="border-b-2 border-gray-400 pb-3">
            <h3 className="text-[15px] font-semibold mb-2">
              Growth & Expansion
            </h3>
            <p className="text-[13px]">
              Increasing business size, market reach, revenue, and resources to
              achieve long-term sustainability and competitive advantage.
            </p>
          </div>

        </div>
        <div className="space-y-4">

    
          <div className="relative w-full h-[280px] rounded-[20px] overflow-hidden">
            <Image
              src="/Mask group.png"
              alt="main"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(12,27,54,0.79)_90%)]"></div>

            <div className="absolute bottom-4 left-4 text-white z-10">
              <h3 className="text-sm font-bold">Pre-Market</h3>
              <p className="text-xs max-w-[200px]">
                Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="relative h-[180px] rounded-[20px] overflow-hidden">
              <Image src="/Mask3.png" alt="operations" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-sm font-bold">Operations</span>
              </div>
            </div>

            <div className="relative h-[180px] rounded-[20px] overflow-hidden">
              <Image src="/Mask2.png" alt="growth" fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white text-sm font-bold">Growth & Expansion</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ---------------- DESKTOP LAYOUT ---------------- */}

      <div className="hidden lg:block">

        <div className="relative max-w-[1920px] mx-auto h-[627px]">

          <div className="absolute top-[55px] left-[90px]">
            <div className="w-[224px] h-[218px] bg-[#EEEEEE] rounded-[20px] flex items-end p-6">
              <h2 className="font-semibold text-[24px] leading-[100%] text-black">
                INSPIRATION &<br /> INSIGHTS
              </h2>
            </div>
          </div>

          <div className="absolute top-[56px] left-[384px] max-w-[567px]">
            <div className="border-b-2 border-[#00338D] pb-3">
              <h3 className="text-[16px] font-semibold text-[#00338D] mb-[6px]">
                Pre-market Entry
              </h3>
              <p className="text-[14px] text-[#00338D] leading-[100%]">
                Pre-market entry means trading securities before regular market hours
                to react to overnight news, with lower liquidity and wider spreads.
              </p>
            </div>
          </div>

          <div className="absolute top-[166px] left-[384px] max-w-[567px]">
            <div className="border-b-2 border-gray-400 pb-3">
              <h3 className="text-[16px] font-semibold text-black mb-[6px]">
                Market Entry
              </h3>
              <p className="text-[14px] text-black leading-[100%]">
                Research demand, assess competition, choose mode, localize offering,
                comply regulations, price strategically, partner locally, iterate learning.
              </p>
            </div>
          </div>

          <div className="absolute top-[276px] left-[384px] max-w-[567px]">
            <div className="border-b-2 border-gray-400 pb-3">
              <h3 className="text-[16px] font-semibold text-black mb-[6px]">
                Operations
              </h3>
              <p className="text-[14px] text-black leading-[100%]">
                Planning, organizing, and managing processes to efficiently produce goods or services,
                ensuring quality, cost-effectiveness, and customer satisfaction.
              </p>
            </div>
          </div>


          <div className="absolute top-[390px] left-[384px] max-w-[567px]">
            <div className="border-b-2 border-gray-400 pb-3">
              <h3 className="text-[16px] font-semibold text-black mb-[6px]">
                Growth & Expansion
              </h3>
              <p className="text-[14px] text-black leading-[100%]">
                Increasing business size, market reach, revenue, and resources to achieve
                long-term sustainability and competitive advantage.
              </p>
            </div>
          </div>

          <div className="absolute right-[90px] top-[62px] flex gap-4 h-[498px]">

          <div className="relative w-[374px] h-[498px] rounded-[20px] overflow-hidden">
            <Image
              src="/Mask group.png"
              alt="main"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(12,27,54,0.79)_90%)]"></div>

            <div className="absolute bottom-6 left-6 text-white z-10">
              <h3 className="text-sm font-bold">Pre-Market</h3>
              <p className="text-xs max-w-[220px]">
                Evaluating Supply Chain Readiness Before Committing Capital in Emerging Markets
              </p>
            </div>
          </div>

          <div className="relative w-[138px] h-[498px] rounded-[20px] overflow-hidden">
            <Image
              src="/Mask3.png"
              alt="operations"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(12,27,54,0.79)_90%)]"></div>

            <div className="absolute inset-0 flex items-end justify-center pb-[40px] z-10">
              <span className="text-white font-bold text-xs rotate-[-90deg]">
                Operations
              </span>
            </div>
          </div>

          <div className="relative w-[138px] h-[498px] rounded-[20px] overflow-hidden">
            <Image
              src="/Mask2.png"
              alt="growth"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(12,27,54,0.79)_90%)]"></div>

            <div className="absolute inset-0 flex items-end justify-center pb-[40px] z-10">
              <span className="text-white font-bold text-xs rotate-[-90deg]">
                Growth & Expansion
              </span>
            </div>
          </div>

        </div>

        </div>

      </div>

    </section>
  );
}