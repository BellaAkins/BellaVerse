import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { testimonials } from "../assets/data";
import { FaStar } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const TestimonialsSection = () => {
  return (
    <section
      className="py-16 px-4 mx-auto max-w-7xl relative"
      id="testimonials"
    >
      {/* gradient blob */}
      <div className="absolute bottom-28 right-28 w-[500px] h-[500px] bg-gradient-to-tr from-red-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
      {/*heading*/}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">
          Straight From{" "}
          <span className="font-normal">
            {" "}
            Bella
            <span className="text-4xl text-pink-600 font-normal">V</span>
            erse
          </span>{" "}
          Fam
        </h2>
        <p className="text-gray-600">
          We no dey hype ourselves; the squad don already run am🔊
        </p>
      </div>

      {/*testimonial cards with swiper*/}
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="testimonials-swiper md:mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-full md:py-12 py-4">
              <div className="text-center bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
                {/*testimonial image*/}
                <div className="w-24 h-24 mb-4 mx-auto">
                  <img
                    src={testimonial.image}
                    alt=""
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                {/*stars */}
                <div className="flex justify-center mb-2 gap-2">
                  {[...Array(5)].map((_, starIndex) => (
                    <span className="text-pink-500">
                      <FaStar className="size-4" />
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-3 ">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600"> {testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/*arrows*/}
        <div className="flex justify-center gap-4 md:mt-8 mt-4">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center  hover:bg-pink-500 hover:border-0 hover:text-white transition-all duration-200">
            <BsChevronLeft className="size-6   text-pink-300" />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-200">
            <BsChevronRight className="size-6  text-pink-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
