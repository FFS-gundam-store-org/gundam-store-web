'use client'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Search, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MainBar() {
  const [isFocused, setIsFocused] = useState(false)
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    console.log(searchText)
  }

  return (
    <div className="px-responsive h-[10vh] flex justify-between items-center">
      <Link href={'/'} className="logo">
        <em>GUNDAM FFS</em>
      </Link>
      <div className="relative">
        <Input
          type="text"
          className="w-[500px] max-xl:w-[300px] h-[40px]"
          placeholder="Tìm kiếm..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => !searchText && setIsFocused(false)}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        {isFocused && (
          <button
            className="absolute top-2.5 right-3 cursor-pointer duration-300 hover:text-destructive"
            onClick={handleSearch}>
            <Search size={20} />
          </button>
        )}
      </div>
      <div className="flex gap-[50px] items-center">
        <Link href={'#'}>
          <Button className="login-btn transition-colors duration-300 hover:bg-destructive">
            Đăng nhập
          </Button>
        </Link>
        <Link href={'#'} className="nav-link">
          <ShoppingCart />
        </Link>
      </div>
    </div>
  )
}