import { PhoneCallIcon, MapIcon, InstagramIcon, XIcon, FacebookIcon, LinkedinIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FooterPage = () => {
  return (
    <footer
      className='bg-black-200 w-full 4xl:h-[393px] md:py-16 xl:py-30 xs:py-16
     mx-auto xs:px-8 max-w-screen-4xl'>
      <div className='w-full xl:h-[201px] xl:px-48 flex 
      justify-between items-center 
      gap-x-60 2xl:gap-36 md:px-6 md:gap-x-10 md:flex-row flex-col h-full'>
        <div className='xl:w-full'>
          <Link href="/">
            <p className='text-[30px] font-bold leading-normal text-white'>
              get<span className='text-pink'>linked</span></p>
          </Link>
          <p className='text-white font-[Montserrat] text-[12px] leading-[21px]'>
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <div className='md:mt-10 sm:mt-10 sm:mb-10 xs:mb-8 xs:mt-8'>
            <p className='text-white font-[Montserrat] text-[12px]'>Terms of Use <span className='text-pink gap-x-6'> | </span> Privacy Policy</p>
          </div>
        </div>

        <div>
          
        </div>
        <div className='items-start w-[550px] h-[210px] sm:w-full xs:w-full'>
          <p className='text-[14px] font-semibold leading-10 text-pink font-[Montserrat]'>
            Useful Links
          </p>
          <ul className='text-white font-[Montserrat] leading-0 space-y-4'>
            <li className=''>
              <Link href="/">
                <p className='text-[12px]'>Overview</p>
              </Link>
            </li>
            <li className=''>
              <Link href="/">
                <p className='text-[12px]'>Timeline</p>
              </Link>
            </li>
            <li className=''>
              <Link href="/">
                <p className='text-[12px]'>FAQs</p>
              </Link>
            </li>
            <li className=''>
              <Link href="/">
                <p className='text-[12px]'>Register</p>
              </Link>
            </li>
          </ul>
          <div className='mt-10 flex gap-5 sm:mt-10 sm:mb-10 xs:mb-8 xs:mt-8'>
            <p className='text-pink text-[12px] font-[Montserrat]'>Follow us</p>
            <div className='flex items-center gap-x-3'>
              <InstagramIcon color='#fff'/>
              <XIcon color='#fff'/>
              <FacebookIcon color='#fff'/>
              <LinkedinIcon color='#fff'/>
            </div>
          </div>
        </div>

        <div className='items-start w-[550px] h-[210px] sm:w-full xs:w-full xs:mt-10'>
          <p className='text-[14px] font-semibold leading-10 text-pink font-[Montserrat]'>
            Contact Us
          </p>
          <div className='flex items-center gap-6 mb-8'>
            <PhoneCallIcon color='#fff' size={20}/>
            <span className='text-white font-[Montserrat] text-[12px]'>+234 679 81819</span>
          </div>
          <div className='flex items-center gap-6'>
            <MapIcon color='#fff' size={30}/>
            <span className='text-white font-[Montserrat] text-[12px]'>27,Alara Street Yaba 100012 Lagos State</span>
          </div>
        </div>
      </div>

        <p className='flex justify-center text-white sm:mt-20 font-[Montserrat] text-[12px] xs:text-[16px] xs:mt-5'>All rights reserved. © getlinked Ltd.</p>
    </footer>
  )
}

export default FooterPage