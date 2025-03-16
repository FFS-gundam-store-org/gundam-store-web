import TopBar from '@/components/header/TopBar'
import MainBar from '@/components/header/MainBar'
import MenuBar from '@/components/header/MenuBar'
import MenuMobile from '@/components/header/MenuMobile'

export default function Header() {
  return (
    <nav className="container max-w-full h-[68px] lg:h-[22vh] max-lg:shadow-md ">
      <div className="max-lg:hidden">
        <TopBar />
        <MainBar />
        <MenuBar />
      </div>
      <MenuMobile />
    </nav>
  )
}