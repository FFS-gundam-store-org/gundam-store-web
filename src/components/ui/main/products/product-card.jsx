'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShoppingBasket } from 'lucide-react'

export default function ProductCard({ data }) {
  return (
    <Link href={data.link} className="relative group block">
      <Card
        className="w-full h-[400px] transition-all duration-300 ease-out group-hover:opacity-50">
        <CardHeader>
          <img src={data.image} alt="" className="w-full h-[240px] object-cover" />
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <CardTitle>{data?.name}</CardTitle>
          <p className="text-lg font-bold text-destructive">{data?.price}</p>
          <p>STAR</p>
        </CardContent>
      </Card>
      <div className="absolute inset-0 h-[40px] flex justify-center items-center top-50
           opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Button
          variant="secondary"
          className="flex items-center rounded-full shadow-lg
          transition-colors duration-300 hover:bg-chart-1 cursor-pointer">
          <ShoppingBasket size={15} />
        </Button>
      </div>
    </Link>
  )
}
