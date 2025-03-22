'use client'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function InputSearch({classname}) {
  const [isFocused, setIsFocused] = useState(false)
  const [searchText, setSearchText] = useState('')

  const handleSearch = () => {
    console.log(searchText)
  }
  return (
    <div className="relative">
      <Input
        type="text"
        className={cn("h-[40px]",classname)}
        placeholder="Tìm kiếm..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => !searchText && setIsFocused(false)}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      {isFocused && (
        <button
          className="absolute top-2.5 right-3 cursor-pointer hover-link"
          onClick={handleSearch}>
          <Search size={20} />
        </button>
      )}
    </div>
  )
}