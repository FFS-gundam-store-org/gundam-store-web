'use client'
import { CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { products } from '@/services/mock-datas/data'
import Link from 'next/link'
import SlideHoverButton from '@/components/ui/slide-hover-button'
import { MoveRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import AnimateWrapper from '@/components/animate-wrapper/AnimateWrapper'
import AutoScrollCarousel from '@/components/ui/auto-scroll-carousel'
import ProductCard from '@/components/main/products/ProductCard'

export default function NewProduct() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100)
  }, [])
  return (
    <div className="w-full h-[530px] flex flex-col justify-center items-center">
      <h1 className="text-3xl ">Sản phẩm mới</h1>
      <AutoScrollCarousel>
        <AnimateWrapper effect="zoom-in">
          <CarouselContent className="h-[450px] flex items-center">
            {products?.map(product => (
              <CarouselItem key={product.id}
                            className="w-full basis-1/1 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <ProductCard data={product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </AnimateWrapper>
      </AutoScrollCarousel>
      <Link href={'#'}>
        <SlideHoverButton
          className="w-30 text-destructive hover:text-secondary"
          bgHover="bg-destructive">
          Xem thêm
          <MoveRight />
        </SlideHoverButton>
      </Link>
    </div>
  )
}