import Logo from '@/components/ui/logo'
import { footerItems } from '@/services/mock-datas/data'
import Link from 'next/link'
import { Facebook, Mail, MapPin, PhoneCall, Youtube } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {

  return (
    <>
      <div className="w-full mt-10 bg-primary text-sm text-secondary px-responsive py-5">
        <div className="w-full flex justify-between items-start">
          <div className="flex-shrink-0">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="flex flex-col space-y-2">
              <ul className="text-sm space-y-2 ">
                <li>
                  <Link
                    href={'https://www.google.com/maps/place/212%2F17+%C4%90.+Nguy%E1%BB%85n+Thi%E1%BB%87n+Thu%E1%BA%ADt,+Ph%C6%B0%E1%BB%9Dng+3,+Qu%E1%BA%ADn+3,+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7693004,106.6777268,19z/data=!3m1!4b1!4m6!3m5!1s0x31752f2032159b6d:0x801d1926ba62c244!8m2!3d10.7692991!4d106.6789445!16s%2Fg%2F11j0srx0h9?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D'}
                    target={'_blank'}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover-link">
                    <MapPin size={18} />
                    212/17, Nguyễn Thiện Thuật, Phường 03, Quận 03, TP.HCM
                  </Link>
                </li>
                <li>
                  <Link
                    href={'mailto:gundam.ffs@example.com'}
                    className="flex items-center gap-2 hover-link">
                    <Mail size={18} />
                    gundam.ffs@example.com
                  </Link>
                </li>
                <li>
                  <Link
                    href={'tel:0989999999'}
                    className="flex items-center gap-2 hover-link">
                    <PhoneCall size={18} />
                    0989.999.999
                  </Link>
                </li>
              </ul>
              <hr />
              <div className="flex items-center gap-x-4">
                <Link href={'#'} className="hover-link">
                  <Facebook size={20} />
                </Link>
                <Link href={'#'} className="hover-link">
                  <Youtube size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-25">
            {footerItems?.map(item => (
              <div key={item.id} className="">
                <h1 className="font-bold text-xl mb-3">{item.name}</h1>
                <ul className="space-y-2">
                  {item?.subItems?.map(subItem => (
                    <li key={subItem.id}>
                      <Link href={subItem.link} className="hover-link">{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold text-xl mb-3">Đăng ký nhận tin</h1>
            <div className="flex flex-col gap-2">
              <Input
                type="text"
                placeholder="Nhập email..."
                className="w-[200px]"
              />
              <Button variant="destructive">Đăng ký</Button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <p className="flex justify-center items-center">Copyright © 2025 FFSSolutions. All rights reserved.</p>
    </>
  )
}
