// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import required modules
import { FreeMode, Pagination } from "swiper";

// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Web Design from Client's Idea",
    description: "Collaboratively crafting unique web designs reflecting your brand identity.",
  },
  {
    icon: <RxPencil2 />,
    title: "Front-end Web Development",
    description: "Designing responsive UI/UX with HTML, CSS, and modern frameworks.",
  },
  {
    icon: <RxDesktop />,
    title: "Back-end Web Development",
    description: "Providing secure back-end solutions for functionality and performance.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Crafting persuasive, engaging copy to captivate your audience and convey messages.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Implementing SEO strategies for improved website rankings and increased visibility.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
          clickable: true,
        }}
      modules={{ FreeMode, Pagination }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(78,56,151,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8 ">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl fixed bottom-0 mb-8">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
