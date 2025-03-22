import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import InputSearch from '@/components/ui/input-search'

export default function MainNavbar() {

  return (
    <div className="px-responsive h-[10vh] flex justify-between items-center">
      <Logo />
      <InputSearch classname="w-[300px] xl:w-[500px]" />
      <div className="flex gap-[50px] items-center">
        <Link href={'#'}>
          <Button className="login-btn transition-colors duration-300 hover:bg-destructive">
            Đăng nhập
          </Button>
        </Link>
        <Link href={'#'} className="hover-link">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  )
}