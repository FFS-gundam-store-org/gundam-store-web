'use client'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import ProductCard from '@/components/main/products/ProductCard'
import { products } from '@/services/mock-datas/data'
import AutoScroll from 'embla-carousel-auto-scroll'

export default function ProductSlider() {
  return (
    <>
      <Carousel
        plugins={[
          AutoScroll({
            speed: 0.5,
            stopOnMouseEnter: true,
            stopOnInteraction: false
          })
        ]}
        opts={{ loop: true }}
        className="w-full">
        <CarouselContent className="h-[450px] flex items-center">
          {products.map(product => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <ProductCard data={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}