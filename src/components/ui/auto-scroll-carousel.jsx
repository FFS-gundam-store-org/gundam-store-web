import AutoScroll from 'embla-carousel-auto-scroll'
import { Carousel } from '@/components/ui/carousel'

export default function AutoScrollCarousel({ children }) {

  return (
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
      {children}
    </Carousel>
  )
}