import TopNavbar from '@/components/ui/header/top-navbar'
import MainNavbar from '@/components/ui/header/main-navbar'
import MenuNavbar from '@/components/ui/header/menu-navbar'
import MenuMobile from '@/components/ui/header/menu-mobile'

export default function Header() {
  return (
    <nav className="container max-w-full h-[68px] lg:h-[22vh] max-lg:shadow-md ">
      <div className="max-lg:hidden">
        <TopNavbar />
        <MainNavbar />
        <MenuNavbar />
      </div>
      <MenuMobile />
    </nav>
  )
}