import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function SlideHoverButton({ children, className, bgHover, ...props }) {

  return (
      <Button
        variant="outline"
        className={cn(
          'relative overflow-hidden cursor-pointer border border-destructive transition-colors duration-500 group',
          className
        )}
        {...props}>
        <span className={cn(
          'absolute inset-0 translate-x-[-100%] transition-transform duration-500 ease-in-out group-hover:translate-x-0',
          bgHover
        )} />
        <span className="relative flex items-center gap-2">
      {children}
        </span>
      </Button>
  )
}