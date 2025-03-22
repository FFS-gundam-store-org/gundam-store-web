import Link from 'next/link'
import { Facebook, Mail, Phone, Youtube } from 'lucide-react'

export default function TopNavbar() {
  return (
    <div className="px-responsive h-[5vh] shadow-md flex justify-between items-center">
      <div className=" flex gap-[10px] text-[12px]">
        <Link href="#" className="hover-link">PRIVACY POLICY</Link>
        <span>|</span>
        <Link href="#" className="hover-link">TERM OF USE</Link>
        <span>|</span>
        <Link href="#" className="hover-link top-bar-link">
          <Mail size={16} color="#E7000BFF" />
          gundam.ffs@example.com</Link>
      </div>
      <div className="flex gap-[10px] text-[12px]">
        <Link href="#" className="hover-link top-bar-link">
          <Phone size={16} color="#E7000BFF" />
          0989.999.999
        </Link>
        <span>|</span>
        <Link href="#" className="hover-link"><Facebook size={16} /></Link>
        <span>|</span>
        <Link href="#" className="hover-link"><Youtube size={16} /></Link>
      </div>
    </div>
  )
}