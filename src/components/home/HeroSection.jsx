// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import banner13 from "../../assets/hero/avengers.jpg";
import banner14 from "../../assets/hero/intersteller.jpg";
import banner11 from "../../assets/hero/oppenhimer.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { useContext, useRef, useState } from "react";
// import LoadingContext from "../ContextApi/LoadingContext";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import HeroBanner from "./HeroBanner";
import HeroDesc from "./HeroDesc";

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  // Custom navigation buttons
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        // navigation={{
        //   prevEl: navigationPrevRef.current,
        //   nextEl: navigationNextRef.current,
        // }}
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => {
        //   // Necessary to update refs for custom buttons
        //   setTimeout(() => {
        //     swiper.params.navigation.prevEl = navigationPrevRef.current;
        //     swiper.params.navigation.nextEl = navigationNextRef.current;
        //     swiper.navigation.init();
        //     swiper.navigation.update();
        //   });
        // }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner13} />
            <div
              className={`absolute flex flex-col justify-center items-center lg:inline lg:pl-[50rem] ${
                activeIndex === 0 ? "" : ""
              }`}
            >
              <HeroDesc
                title={"Avengers: Endgame"}
                duration={181}
                description={
                  "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos actions and restore order to the universe once and forall, no matter what consequences may be in store."
                }
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner11} />
            <div
              className={`absolute flex flex-col justify-center items-center  lg:inline lg:pr-[50rem] ${
                activeIndex === 1 ? "" : ""
              }`}
            >
              <HeroDesc
                title={"Oppenheimer"}
                duration={180}
                description={
                  "A dramatization of the life story of J. Robert Oppenheimer, the physicist who had a large hand in the development of the atomic bombs that brought an end to World War II."
                }
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center h-full w-full">
            <HeroBanner source={banner14} />
            <div
              className={`absolute flex flex-col justify-center items-center lg:inline lg:pr-[60rem] ${
                activeIndex === 2 ? "" : ""
              }`}
            >
              <HeroDesc
                title={"Interstellar"}
                duration={169}
                description={
                  "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
                }
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <button
        ref={navigationPrevRef}
        className="text-primary hover:text-primaryHover hover:cursor-pointer lg:text-[3rem] text-[1.8rem] absolute left-2 top-1/2 z-10"
      >
        <FaArrowCircleLeft />
      </button>
      <button
        ref={navigationNextRef}
        className="text-primary hover:text-primaryHover hover:cursor-pointer lg:text-[3rem] text-[1.8rem] absolute right-2 top-1/2 z-10"
      >
        <FaArrowCircleRight />
      </button>
    </div>
  );
}
