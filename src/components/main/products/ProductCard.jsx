'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ProductCard({ data }) {
  return (
    <>
      <Link href={data.link}>
        <Card
          className="w-[320px] h-[400px] transition-all duration-300 ease-out
          hover:h-[420px] hover:scale-105 hover:shadow-lg group">
          <CardHeader className="">
            <img src={data.image} alt="" className="h-[240px] object-cover" />
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p>STAR</p>
            <CardTitle>{data?.name}</CardTitle>
            <div className="relative">
              <p
                className="text-lg font-bold text-red-500
                transition-opacity duration-300 group-hover:opacity-0">
                {data?.price}
              </p>
              <Button
                className="absolute top-0 w-full h-[40px]
                opacity-0 transition-opacity duration-300 group-hover:opacity-100
                hover:bg-destructive cursor-pointer">
                Thêm vào giỏ hàng
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}
