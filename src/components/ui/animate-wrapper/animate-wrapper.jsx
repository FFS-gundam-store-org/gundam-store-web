'use client'
import { useEffect, useRef, useState } from 'react'

export default function AnimateWrapper({ children, effect, index = 0, delay = 100 }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [delay])

  let animationClass = 'opacity-0 scale-75'
  if (effect === 'fade') animationClass = 'opacity-0 scale-75'
  if (effect === 'zoom-in') animationClass = 'opacity-0 scale-50'
  if (effect === 'slide-in') animationClass = index % 2 === 0 ? '-translate-x-40 opacity-0' : 'translate-x-40 opacity-0'

  return (
    <div ref={ref}
         className={`transform transition-all duration-700 ease-out
        ${visible ? 'scale-100 opacity-100 translate-x-0' : animationClass}`}>
      {children}
    </div>
  )
}
