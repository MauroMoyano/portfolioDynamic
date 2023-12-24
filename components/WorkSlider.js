// data
export const workSlides = {
  slides: [
    {
      images: [
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
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
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
      modules={{Pagination}}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group ">
                  <div className="flex items-center justify-center relative overflow-hidden">
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt="" />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 border"></div>
                    {/* title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20">
                      <div>
                        {/* title part 1 */}
                        <div>title part 1</div>
                        {/* title part 2 */}
                        <div>title part 2</div>
                        {/* icon */}
                        <div>icon</div>
                      </div>
                    </div>
                    </div>
                </div>
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
