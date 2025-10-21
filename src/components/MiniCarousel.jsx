import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { sampleProducts } from "../../constant";

export default function MiniCarousel() {
  const items = sampleProducts.slice(0, 18);
  const [api, setApi] = React.useState(null);
  const intervalRef = React.useRef(null);

  const startAutoScroll = React.useCallback(() => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      api?.scrollNext();
    }, 2500);
  }, [api]);

  const stopAutoScroll = React.useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!api) return;
    startAutoScroll();
    return () => stopAutoScroll();
  }, [api, startAutoScroll, stopAutoScroll]);

  return (
    <section className="bg-white" aria-label="Product categories mini carousel">
      <div className="w-full px-0" onMouseEnter={stopAutoScroll} onMouseLeave={startAutoScroll}>
        <Carousel
          opts={{ align: "start", loop: true, dragFree: true }}
          className="relative py-6"
          setApi={setApi}
        >
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
              >
                <div className="overflow-hidden rounded-md shadow-sm group">
                  <div className="relative aspect-[4/3] w-full">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-3 text-white bg-gradient-to-t from-black/90 via-black/60 to-black/0">
                      <p className="text-sm font-medium truncate sm:text-base drop-shadow" title={item.name}>{item.name}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-translate-y-1/2 -left-4 top-1/2 bg-white/80 hover:bg-white" />
          <CarouselNext className="-translate-y-1/2 -right-4 top-1/2 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
}


