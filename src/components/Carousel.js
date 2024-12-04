import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules"; // Import Navigation module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Carousel() {
    return (
        <div className="w-[90vw] h-[95vh] rounded-lg shadow-lg object-cover">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]} // Add Navigation module
                autoplay={{
                    delay: 3000, // Slide changes every 3 seconds
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true} // Enable navigation buttons
                spaceBetween={0}
                slidesPerView={1}
                className="h-full"
            >
                <SwiperSlide>
                    <div className="h-full w-full bg-blue-500 flex items-center justify-center">
                        <img
                            src="/aboutUsSlider-image-1.jpeg"
                            alt="Slide 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full bg-green-500 flex items-center justify-center">
                        <img
                            src="/aboutUsSlider-image-2.jpeg"
                            alt="Slide 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full bg-red-500 flex items-center justify-center">
                        <img
                            src="/aboutUsSlider-image-3.jpeg"
                            alt="Slide 3"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full bg-red-500 flex items-center justify-center">
                        <img
                            src="/aboutUsSlider-image-4.jpeg"
                            alt="Slide 4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full bg-red-500 flex items-center justify-center">
                        <img
                            src="/aboutUsSlider-image-5.jpeg"
                            alt="Slide 5"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full bg-red-500 flex items-center justify-center">
                        <img
                            src="/aboutUsSlider-image-6.jpeg"
                            alt="Slide 6"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-full w-full bg-red-500 flex items-center justify-center">
                        <img
                            src="/aboutUsSlider-image-7.jpeg"
                            alt="Slide 7"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
