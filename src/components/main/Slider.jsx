'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Link from 'next/link'
import { bannerItems } from '@/services/mock-datas/data'
import { MoveRight } from 'lucide-react'
import Autoplay from 'embla-carousel-autoplay'

export default function Slider() {

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: false
        })
      ]}
      opts={{ loop: true }}
      className="w-full">
      <CarouselContent>
        {bannerItems?.map(item => (
          <CarouselItem key={item.id} className="relative group">
            <Link href={item.link}>
              <img src={item.banner}
                   alt={`Banner ${item.id}`}
                   className="w-full aspect-[3/1] max-lg:aspect-square object-cover" />
              <div className="absolute inset-0 bg-black/30"></div>
              <div
                className="absolute inset-0 flex flex-col justify-center gap-5 max-lg:items-center max-md:gap-2
                text-secondary font-bold px-[170px] max-2xl:px-[85px] max-lg:px-0">
                <p className="text-5xl max-2xl:text-4xl max-md:text-xl">{item.title}</p>
                <p className="text-7xl max-2xl:text-6xl max-md:text-3xl">{item.subtitle}</p>
                <p className="text-3xl max-2xl:text-2xl max-md:text-xl">{item.year}</p>
                <p className="flex items-center gap-2 text-2xl max-2xl:text-xl max-lg:hidden
                  transition-colors duration-300 group-hover:text-destructive">
                  Xem thêm
                  <MoveRight size={30} />
                </p>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 border border-primary bg-transparent cursor-pointer max-lg:hidden" />
      <CarouselNext className="right-2 border border-primary bg-transparent cursor-pointer max-lg:hidden" />
    </Carousel>
  )
}