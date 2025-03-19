import Header from '@/components/header/Header'
import Slider from '@/components/main/Slider'
import ProductSlider from '@/components/main/products/ProductSlider'
import Link from 'next/link'
import SlideHoverButton from '@/components/ui/SlideHoverButton'
import { MoveRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <header
        id="header"
        className="sticky w-full top-0 left-0 z-50 bg-secondary">
        <Header />
      </header>
      <main>
        <Slider />
        <div className="mt-10 px-[170px]">
          <div className="w-full h-[530px] flex flex-col justify-center items-center">
            <h1 className="text-3xl ">Sản phẩm mới</h1>
            <ProductSlider />
            <Link href={'#'}>
              <SlideHoverButton
                className="w-30 bg-transparent text-destructive hover:bg-transparent hover:text-secondary"
                bgHover="bg-destructive">
                Xem thêm
                <MoveRight />
              </SlideHoverButton>
            </Link>
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </>
  )
}
