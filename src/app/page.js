import Header from '@/components/ui/header/header'
import SliderBanner from '@/components/ui/main/slider-banner'
import NewProduct from '@/components/ui/main/products/new-product'
import PopularProduct from '@/components/ui/main/products/popular-product'
import Footer from '@/components/ui/footer/footer'

export default function Home() {
  return (
    <>
      <header
        id="header"
        className="sticky w-full top-0 left-0 z-50 bg-secondary">
        <Header />
      </header>
      <main>
        <SliderBanner />
        <div className="mt-10 px-responsive flex flex-col gap-y-10">
          <NewProduct />
          <PopularProduct />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
