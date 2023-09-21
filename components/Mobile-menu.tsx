"use client"

import Image from 'next/image'
import {
    Sheet,
    SheetContent,
    SheetTrigger
} from '@/components/ui/sheet'
import Link from 'next/link'
import { Button } from './ui/button'
import { usePathname } from "next/navigation";
import { cn } from '@/lib/utils'

const navData = [
    { name: "Timeline", path: "/#timeline" },
    { name: "Overview", path: "/" },
    { name: "FAQs", path: "/#faq" },
    { name: "Contact", path: "/contact" },
  ];

const MobileMenuPage = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger>
                <div>
                    <Image
                        src="./hamburger-menu.svg"
                        width={30}
                        height={30}
                        alt='Hamburger Menu'
                        className='block lg:hidden' />
                </div>
            </SheetTrigger>
            <SheetContent side="left" className='p-0 mobile-menu'>
                <ul className='text-white pt-20 pl-10 font-[Montserrat]'>
                    <li className='block'>
                        {navData.map((link, index) => {
                            return (
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={cn`${link.path === pathname && "text-gradient font-bold"} 
                                    block text-[18px] text-white space-y-0 mx-auto pt-20 pl-10 font-[Montserrat] transition-all duration-300`}>
                                    {link.name}
                                </Link>
                            )
                        })}
                    </li>
                    {/* <li className=''>
                        <Link href="/">Timeline</Link>
                    </li>
                    <li>
                        <Link href="/">Overview</Link>
                    </li>
                    <li>
                        <Link href="/">FAQs</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li> */}
                    <Link href='/register'>
                        <Button
                            className='text-white text-button font-light font-[Montserrat] w-[172px] h-[53px] mt-10'>
                            <p>Register</p>
                        </Button>
                    </Link>
                </ul>
            </SheetContent>
        </Sheet>
    )
}

export default MobileMenuPage