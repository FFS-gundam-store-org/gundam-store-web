'use client'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Link from 'next/link'
import { bannerItems } from '@/services/mock-datas/data'
import { MoveRight } from 'lucide-react'
import AnimateWrapper from '@/components/ui/animate-wrapper/animate-wrapper'
import AutoPlayCarousel from '@/components/ui/auto-play-carousel'

export default function SliderBanner() {

  return (
    <AutoPlayCarousel>
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
                text-secondary font-bold max-lg:px-0 px-responsive">
                <AnimateWrapper effect="fade">
                  <p className="text-5xl max-2xl:text-4xl max-md:text-xl">{item.title}</p>
                  <p className="text-7xl max-2xl:text-6xl max-md:text-3xl">{item.subtitle}</p>
                  <p className="text-3xl max-2xl:text-2xl max-md:text-xl">{item.year}</p>
                  <p className="flex items-center gap-2 text-2xl max-2xl:text-xl max-lg:hidden
                  transition-colors duration-300 group-hover:text-destructive">
                    Xem thêm
                    <MoveRight size={30} />
                  </p>
                </AnimateWrapper>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </AutoPlayCarousel>
  )
}