// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/portfolio2.png",
		  deploy: "https://portfolio-dynamic.vercel.app/"
        },
        {
          title: "title",
          path: "/fc.png",
          deploy: ""
        },
        {
          title: "title",
          path: "/eolam.jpg",
          deploy: "https://eolam.vercel.app/"
        },
        {
          title: "title",
          path: "/LangChain.png",
		  deploy: "https://langchain-ai-app.vercel.app/"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/portfolio.png",
          deploy: "https://portfolio-dev-mauromoyano.vercel.app/"
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
		  deploy: "https://langchain-ai-app.vercel.app/"
        },
      ],
    },
  ],
};
// components
import { Swiper, SwiperSlide } from "swiper/react";

// next image
import Image from "next/image";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={{ Pagination }}
      className="h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
					onClick={() => window.open(image.deploy, "_blank")}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group w-[360px] h-[200px]">
                      {/* image */}
                      <Image src={image.path} width={360} height={200} alt="" className="h-full"/>
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300 ">
                        <div className="flex items-center gap-x-2 text-[13px] traking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">LIVE</div>
                          {/* title part 2 */}
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            PROJECT
                          </div>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
