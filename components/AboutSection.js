import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full bg-white overflow-hidden">

      <div className="lg:hidden px-5 py-12">

        <div className="mb-6">
          <div className="w-[160px] h-[140px] bg-[#EEEEEE] rounded-[20px] flex items-end p-4">
            <h2 className="font-semibold text-[20px] leading-tight">
              ABOUT <br /> FIRM
            </h2>
          </div>
        </div>

        <h2 className="text-[22px] font-semibold mb-3">
          HLS Global Group
        </h2>

        <p className="text-[14px] text-gray-600 leading-6 mb-8 text-justify">
          is an international accounting and business advisory firm with a focus
          on providing superior services in accounting, tax, audit, advisory,
          and consulting. Founded in 1990, we pride ourselves in delivering
          high quality services while remaining cost-effective.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-[28px] font-bold">250+</h3>
            <p className="text-[13px] text-gray-500">
              Professional Staff Members Globally
            </p>
          </div>

          <div>
            <h3 className="text-[28px] font-bold">1000+</h3>
            <p className="text-[13px] text-gray-500">
              Clients in the HLS Global Network
            </p>
          </div>
        </div>

        <div className="w-full h-[2px] bg-[#00338D] my-6"></div>

        <div className="grid grid-cols-2 gap-6 mb-10">
          <div>
            <h3 className="text-[28px] font-bold">35+</h3>
            <p className="text-[13px] text-gray-500">
              Years of Experience
            </p>
          </div>

          <div>
            <h3 className="text-[28px] font-bold">15+</h3>
            <p className="text-[13px] text-gray-500">
              Countries Covered
            </p>
          </div>
        </div>

        <div className="relative w-full h-[260px] rounded-[20px] overflow-hidden mb-4">
          <Image
            src="/city.png"
            alt="building"
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-[#FF7300] rounded-[20px] px-4 py-2 flex justify-between text-[12px] font-semibold">
          <span>WE ARE LOCATED</span>
          <span className="font-bold">INDIA ▼</span>
        </div>

      </div>

      <div className="hidden lg:flex justify-center">

        <div
          className="
          relative w-[1920px] h-[688px]

          scale-[0.8]
          xl:scale-[1]

          origin-top
          "
        >

          <div className="absolute top-[-109px] left-[70px] w-[1009px] h-[1009px]">
            <Image src="/map.png" alt="map" fill className="object-contain" />
          </div>

          <div className="absolute top-[28px] left-[90px]">
            <div className="w-[224px] h-[218px] bg-[#EEEEEE] rounded-[20px] flex items-end p-6">
              <h2 className="font-semibold text-[24px] leading-[100%] text-black">
                ABOUT <br /> FIRM
              </h2>
            </div>
          </div>

          <div className="absolute top-[22px] left-[384px] max-w-[520px]">

            <h2 className="text-[24px] poppins mb-4">
              HLS Global Group
            </h2>

            <p className="text-[16px] leading-6 text-gray-600 mb-10 text-justify">
               is an international accounting and business advisory firm with a focus on providing superior services in the areas of accounting, tax, audit, advisory, and consulting. Founded in 1990, we pride ourselves in delivering the highest levels of quality and customer service while remaining cost-effective. We have grown to more than 250 professionals serving clients in the United States, Japan, Mexico, India, Germany, and UAE. While catering to the business requirements of Japanese subsidiaries operating in the United States, Mexico, India, Germany, and UAE, we also provide comprehensive solutions to non-Japanese multinational companies operating in Japan.
            </p>

            <div className="grid grid-cols-2 gap-[120px] mb-6">
              <div>
                <h3 className="text-[36px] font-bold">250+</h3>
                <p className="text-[16px] text-gray-500">
                  Professional Staff Members Globally
                </p>
              </div>

              <div>
                <h3 className="text-[36px] font-bold">1000+</h3>
                <p className="text-[16px] text-gray-500">
                  Clients in the HLS Global Network
                </p>
              </div>
            </div>

            <div className="w-full h-[2px] bg-[#00338D] my-6"></div>

            <div className="grid grid-cols-2 gap-[120px]">
              <div>
                <h3 className="text-[36px] font-bold">35+</h3>
                <p className="text-[16px] text-gray-500">
                  Years of Experience Connecting Japan and the World
                </p>
              </div>

              <div>
                <h3 className="text-[36px] font-bold">15+</h3>
                <p className="text-[16px] text-gray-500">
                  Countries Covered With Our Alliance Network
                </p>
              </div>
            </div>

          </div>

          <div className="absolute top-[83px] left-[1121px] w-[712px] h-[569px] rounded-[25px] overflow-hidden">
            <Image src="/city.png" alt="building" fill className="object-cover" />
          </div>

          <div className="absolute top-[24px] left-[1501px] w-[331px] h-[35px] bg-[#FF7300] rounded-[20px] flex items-center justify-between px-4 text-[12px] font-semibold">
            <span>WE ARE LOCATED</span>
            <span className="font-bold">INDIA ▼</span>
          </div>

        </div>

      </div>

    </section>
  );
}