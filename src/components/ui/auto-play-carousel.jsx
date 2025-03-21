import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function AutoPlayCarousel({ children }) {

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
      {children}
      <CarouselPrevious className="left-2 border border-primary bg-transparent cursor-pointer max-lg:hidden" />
      <CarouselNext className="right-2 border border-primary bg-transparent cursor-pointer max-lg:hidden" />
    </Carousel>
  )
}