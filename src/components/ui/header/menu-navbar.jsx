'use client'
import { menuItems } from '@/services/mock-datas/data'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function MenuNavbar() {

  return (
    <div className="px-responsive h-[7vh] flex items-center bg-chart-3 text-white">
      <ul className="flex gap-[60px]">
        {menuItems?.map(item => (
          <li key={item.id} className="relative group font-bold">
            <Link href={item.link} className="hover-link flex gap-1 items-center">
              {item.name}
              {item?.subItems &&
                <ChevronDown size={15} className="transition-transform duration-300 group-hover:rotate-180" />}
            </Link>

            {item?.subItems && (
              <ul className="absolute mt-1 left-0 w-56 bg-chart-3 text-white shadow-md overflow-hidden
              transform translate-y-[-20px] opacity-0 invisible transition-all duration-300
              group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                {item?.subItems?.map(subItem => (
                  <li key={subItem.id}
                      className="border-b border-secondary flex items-center px-4 py-2 font-normal">
                    <Link href={subItem.link} className="block hover-link">
                      {subItem.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}