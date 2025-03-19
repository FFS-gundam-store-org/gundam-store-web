import { Button } from '@/components/ui/button'

export default function SlideHoverButton({ children, className, bgButton, bgHover, textColor, textHover, ...props }) {
  console.log(textHover)

  return (
    <>
      <Button
        className={`relative overflow-hidden cursor-pointer border border-destructive
        ${textColor} ${bgButton} hover:${bgButton} group ${className}`}
        {...props}>
        <span className={`absolute inset-0 translate-x-[-100%] transition-transform duration-500 ease-in-out 
        group-hover:translate-x-0 ${bgHover}`}>
        </span>
        <span className={`relative flex items-center gap-2 transition-colors duration-500 group-hover:${textHover}`}>
          {children}
        </span>
      </Button>
    </>
  )
}