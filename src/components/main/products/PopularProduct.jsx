import { filterButtonItems, products } from '@/services/mock-datas/data'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/main/products/ProductCard'
import Link from 'next/link'
import SlideHoverButton from '@/components/ui/slide-hover-button'
import { MoveRight } from 'lucide-react'
import AnimateWrapper from '@/components/animate-wrapper/AnimateWrapper'

export default function PopularProduct() {

  return (
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-3xl">Sản phẩm thịnh hành</h1>
        <div className="flex gap-5">
          {filterButtonItems?.map(item => (
            <Button key={item.id}
                    variant="outline"
                    className="cursor-pointer transition-colors duration-300 hover:bg-destructive hover:text-secondary">
              {item.name}
            </Button>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {products?.map(item => (
            <AnimateWrapper key={item.id} effect="slide-in" index={item.id}>
              <ProductCard data={item} />
            </AnimateWrapper>
          ))}
        </div>
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