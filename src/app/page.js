import Header from '@/components/header/Header'
import SliderBanner from '@/components/main/SliderBanner'
import NewProduct from '@/components/main/products/NewProduct'
import PopularProduct from '@/components/main/products/PopularProduct'

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
      </footer>
    </>
  )
}
