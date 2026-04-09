import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../ui/Card.jsx";

export function InsightCarousel({ races }) {
  const slides = races.map((race) => ({
    title: `Race ${race.raceNo}: ${race.runners[0].name}`,
    detail: race.runners[0].note,
    meta: `${race.className} · ${race.distance} · ${race.time}`,
  }));

  return (
    <div className="min-w-0 max-w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          760: { slidesPerView: 2 },
          1080: { slidesPerView: 3 },
        }}
        className="max-w-full pb-10"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title} className="min-w-0">
            <Card className="min-h-44 border-line bg-charcoal">
              <p className="text-xs font-black uppercase text-scarlet">{slide.meta}</p>
              <h3 className="mt-3 text-xl font-black text-gold">{slide.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{slide.detail}</p>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
