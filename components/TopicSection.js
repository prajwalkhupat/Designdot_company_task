import React from "react";
import Image from "next/image";

const topics = [
  "Parliament Introduces Income Tax Bill to Reshape India's Direct Tax Landscape",
  "Indian Export Earnings at Risk as U.S. Tariffs Double to 50%",
  "India Eases Select BIS Norms While Tightening Overall Standards Enforcement",
  "India Modernizes Maritime Law with Carriage of Goods by Sea Bill, 2025"
];

export default function TopicSection() {
  return (
    <section className="w-full bg-white py-8">

      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="
          flex
          flex-col
          gap-6

          lg:flex-row
          lg:gap-12
          xl:gap-[50px]

          lg:ml-12
          xl:ml-20
        ">

          <div className="flex-shrink-0">

            <button
              className="bg-[#FF7300] text-black font-semibold text-sm flex items-center gap-3 w-[206px] h-[49px] rounded-[8px] px-6"
              style={{
                clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
              }}
            >
              HOT TOPICS
            </button>

          </div>

          <div
            className="
            flex
            gap-6
            sm:gap-8

            overflow-x-auto
            scrollbar-hide

            lg:gap-12
            xl:gap-[80px]

            lg:ml-12
            xl:ml-20

            lg:overflow-visible
            w-full
            pb-2
            "
          >

            {topics.map((item, index) => (
              <div
                key={index}
                className="
                group

                min-w-[220px]
                sm:min-w-[240px]

                lg:w-[274px]

                flex
                flex-col
                justify-between

                border-t
                pt-4

                cursor-pointer
                transition-all
                duration-300
                hover:text-[#00338D]
                "
              >

                <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-gray-700 leading-tight group-hover:text-black">
                  {item}
                </p>

                <div className="flex justify-end mt-4">
                  <span className="text-2xl lg:text-3xl font-extrabold transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}