import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Logo({ classname }) {
  return (
    <Link href={'/public'} className={cn('logo', classname)}>
      <em>GUNDAM FFS</em>
    </Link>
  )
}