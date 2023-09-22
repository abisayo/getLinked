"use client"

import Image from 'next/image'
import { zoomIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';

const IdeaPage = () => {
    return (
        < section className='w-full md:flex justify-evenly
        lg:pt-[50px] xl:gap-x-20 lg:gap-x-10 md:gap-x-20 sm:gap-x-5' >
            {/* Left */}
            <div className='animate-pulse'>
                <Image src='/sata-gra.png' width={21} height={25} alt=''/>
            </div>
            <motion.div variants={zoomIn(0.2, 1)} className=''>
                <Image src='/idea.png' alt='Big Idea' width={490} height={447}
                    className='lg:mx-0 mx-auto 3xl:scale-100 scale-75' />
                <Image
                    src='/arrow.png'
                    alt='Arrow'
                    height={50}
                    width={80}
                    className='relative lg:float-right mx-auto mt-[-50px]' />
            </motion.div >

            {/* Right */}
            <motion.div variants={zoomIn(0.2,1)} className='xl:pt-28 lg:pt-16' >
                <h3 className='text-white lg:text-[32px] lg:text-left text-center text-[20px] font-bold'>
                    Introduction to getlinked <br />
                    <span className='text-pink'>tech Hackathon 1.0</span>
                </h3>
                <p className='lg:w-[535px] lg:h-[165px] font-[Montserrat] 
                lg:text-[14px] lg:text-left text-[13px] text-center leading-[28px] mt-[16px] text-white'>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
            </motion.div>
            <div className='absolute animate-pulse ml-[1200px] mt-[120px]'>
                <Image src='/star-pu.png' width={30} height={36} alt=''/>
            </div>
        </section >
    )
}

export default SectionWrapper(IdeaPage, "idea")