import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function SlideHoverButton({ children, className, bgButton, bgHover, textColor, textHover, ...props }) {
  console.log(textHover)

  return (
    <>
      <Button
        className={cn(
          'relative overflow-hidden cursor-pointer border border-destructive group',
          bgButton,
          `hover:${bgButton}`,
          textColor,
          className
        )}
        {...props}>
        <span className={cn(
          'absolute inset-0 translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0',
          bgHover
        )}>
        </span>
        <span className={cn(
          'relative flex items-center gap-2 transition-colors duration-300',
          `hover:${textHover}`
        )}>
          {children}
        </span>
      </Button>
    </>
  )
}