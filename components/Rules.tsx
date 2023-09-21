"use client"

import Image from 'next/image'
import { slideIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';

const RulesPage = () => {
    return (
        <section className='w-full flex md:flex-row l
        g:flex xl:flex 2xl:flex 
        flex-col-reverse justify-evenly gap-x-0'>
            {/* Purple Bg blur */}
            <div
                className='absolute mix-blend-hard-light
                 bg-no-repeat opacity-70 blur -left-8 -z-50'>
                <Image
                    src='/purple-lens.png'
                    alt='purple-lens'
                    width={1037}
                    height={948} />
            </div>
            {/*Left */}
            <div className='absolute animate-pulse mt-[150px] ml-[-500px]'>
                <Image src='/sata-gra.png' width={26} height={32} alt='' />
            </div>
            <motion.div variants={slideIn("left", "type", 1, 1)} className='xl:pt-48 md:py-20 mb-[70px] px-10'>
                <h3 className='text-white md:text-[32px] text-[20px] 
                    leading-[30px] md:text-left font-bold text-center'>
                    Rules and <br /><span className='text-pink'>Guidelines</span>
                </h3>
                <p className='lg:w-[535px] lg:h-[165px] md:w-[400px] 
                    font-[Montserrat] text-[14px] 
                    leading-[28px] mt-[16px] text-white md:text-left text-center'>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
            </motion.div>
            

            {/* Right */}
            <motion.div variants={slideIn("right", "type", 1, 1)} className='xl:py-0 md:py-16' >
                <Image src='/rules.png' alt='Rules' width={664} height={664}
                    className='md:mx-0 mx-auto 3xl:scale-100 scale-75' />
            </motion.div >
            <div className='absolute animate-pulse mt-[550px] ml-[]'>
                <Image src='/star.png' width={21} height={25} alt='' />
            </div>
            {/* Purple Bg blur */}
            <div
                className='absolute mix-blend-hard-light
                 bg-no-repeat opacity-70 blur -right-[0px] -z-50'>
                <Image
                    src='/purple-lens.png'
                    alt='purple-lens'
                    width={1037}
                    height={948} />
            </div>

        </section>
    )
}

export default SectionWrapper(RulesPage, "rules")