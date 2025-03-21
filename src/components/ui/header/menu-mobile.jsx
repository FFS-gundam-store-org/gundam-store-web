'use client'
import Link from 'next/link'
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react'
import { menuItems } from '@/services/mock-datas/data'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import InputSearch from '@/components/ui/input-search'

export default function MenuMobile() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSubMenus, setIsOpenSubMenus] = useState(null)
  const [isFocused, setIsFocused] = useState(false)
  const [searchText, setSearchText] = useState('')

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu)
  }

  const toggleSubMenu = (index, hasSubMenu) => {
    if (hasSubMenu) {
      setIsOpenSubMenus(isOpenSubMenus === index ? null : index)
    } else {
      setIsOpenMenu(!isOpenMenu)
    }
  }

  const handleSearch = () => {
    console.log(searchText)
  }

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <Logo classname="lg:hidden" />
        <div className="text-xl sm:text-3xl cursor-pointer lg:hidden"
             onClick={toggleMenu}>
          {isOpenMenu ? <X /> : <Menu />}
        </div>
      </div>

      <div className={`absolute p-5 w-full bg-chart-3 h-screen overflow-hidden text-secondary transition-transform duration-500 ease-in-out
       ${isOpenMenu ? 'translate-x-0' : 'translate-x-full'} flex flex-col gap-5 lg:hidden`}>
        <InputSearch classname="w-full" />
        <hr className="mobile-menu-line" />
        <ul className="flex flex-col gap-4 font-bold text-xl">
          {menuItems?.map(item => (
            <li key={item.id} onClick={() => toggleSubMenu(item.id, !!item.subItems)}>
              <div className="flex gap-1 items-center">
                <Link href={item.link}>{item.name}</Link>
                {item?.subItems && (
                  <button className="focus:outline-none cursor-pointer">
                    {isOpenSubMenus === item.id ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                  </button>
                )}
              </div>

              {item?.subItems && (
                <ul className={`overflow-hidden transition-all duration-500 ease-in-out
                ${isOpenSubMenus === item.id ? 'max-h-100 opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                  {item?.subItems?.map(subItem => (
                    <li key={subItem.id} className="font-normal py-1" onClick={toggleMenu}>
                      <Link href={subItem.link}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <hr className="mobile-menu-line" />
        <Link href={'#'}>
          <Button className="login-btn">
            Đăng nhập
          </Button>
        </Link>
      </div>
    </>
  )
}