"use client"

import Link from 'next/link'
import { Button } from './ui/button'
import { motion } from "framer-motion"
import { MobileMenuPage } from '@/components/index'
import { usePathname } from "next/navigation";
import { cn } from '@/lib/utils'

import { useEffect, useState } from "react";

const navData = [
  { name: "Timeline", path: "/#timeline" },
  { name: "Overview", path: "/" },
  { name: "FAQs", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

const NavbarPage = () => {
  const pathname = usePathname();

  return (
    <div
      className='flex-center fixed top-0 z-50 
    w-full  border-grey-200 py-7 text-white bg-black-100'>
      <div className='flex-between mx-auto w-full max-w-screen-3xl px-6 xs:px-8 sm:px-16'>
        <Link href="/">
          <p className='text-[36px] font-bold leading-normal text-white'>
            get<span className='text-pink'>linked</span></p>
        </Link>

        <MobileMenuPage />

        <ul
          className='flex-center gap-x-10 xl:gap-28 max-lg:hidden md:gap-x-20 font-[Montserrat]'>
          <li className='flex-center'>
            {navData.map((link, index) => {
              return (
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Link
                    href={link.path}
                    key={index}
                    className={cn`${link.path === pathname && "text-gradient font-bold"} ml-[100px]`}>
                    {link.name}
                  </Link>
                </motion.div>
              )
            })}
          </li>
          {/* <li>
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
              className='text-white text-button font-light font-[Montserrat] w-[172px] h-[53px]'>
              <p>Register</p>
            </Button>
          </Link>
        </ul>
      </div>
    </div>
  )
}

export default NavbarPage