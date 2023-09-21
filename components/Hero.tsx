"use client"

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion';
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import { fadeIn, textVariant } from '@/utils/motion';

import SectionWrapper from '@/hoc/SectionWrapper';



const HeroPage = () => {
    return (
        <section className='w-full md:flex md:pt-[102px] gap-x-10 md:pb-0 sm:pb-[630px] pb-[360px] '>
            {/* Purple Bg blur */}
            <div
                className='absolute -z-50 bg-blend-hard-light -top-10 
  bg-no-repeat opacity-80 m blur'>
                <Image
                    src='/purple-lens.png'
                    alt='purple-lens'
                    width={1086}
                    height={836} />
            </div>
            {/*Left hero */}
            <div className='2xl:py-20 xl:py-20 md:py-6 sm:py-20 pt-[100px] w-full'>
                <div className='relative w-[25px] ml-[240px] sm:mt-0 mt-[100px]
                sm:w-[30px] sm:ml-[400px]
                md:w-[30px] md:ml-[290px] 
                lg:ml-[340px] lg:w-full
                xl:ml-[400px] xl:w-full
                2xl:ml-[510px] 2xl:mb-[-25px] 2xl:w-full'>
                    <Image
                        src='/Creative 1.png'
                        alt='Bulb'
                        width={53}
                        height={73} />
                </div>
                
                
                <motion.h1 variants={textVariant(0.9)} className='font-bold text-white
                text-[32px] text-center 
                sm:text-center sm:text-[45px]
                md:text-[50px] md:text-left
                lg:text-[60px] lg:text-left
                xl:text-[70px] xl:text-left 
                2xl:text-[80px] 2xl:text-left leading-tight'>
                    getlinked Tech <br />
                    Hackathon<span className='text-pink'>
                        1.0  <Image src='/chain.png' alt='Chains' width={86} height={86}
                            className='w-[40px] mt-[-40px] ml-[290px] relative
                            sm:w-[50px] sm:mt-[-50px] sm:ml-[470px]
                            md:w-[60px] md:mt-[-60px] md:ml-[350px] 
                        lg:mt-[-85px] lg:ml-[420px] lg:w-[86px] 
                        xl:mt-[-90px] xl:ml-[500px]  xl:w-[86px]
                        2xl:mt-[-90px] 2xl:ml-[560px] 2xl:w-[86px]' /></span>
                </motion.h1>
                <motion.p variants={textVariant(1.5)} className='font-[Montserrat] text-[13px] text-center mt-[10px] leading-[22px]
                sm:text-center sm:mt-8
                lg:text-[18px] lg:text-left 
                xl:text-[20px] xl:text-left 
                2xl:text-left 3xl:text-left
                 text-white sm:leading-[33px]'>
                    Participate in getlinked tech Hackathon 2023 stand<br /> a chance to win a Big prize
                </motion.p>
                <Button
                    className='text-button font-light  flex mx-auto md:flex-none md:mx-0
                    font-[Montserrat] w-[172px] h-[53px] mt-[24px] sm:mt-[41px]'>
                    <p className='text-white font-normal text-[16px] leading-normal'>Register</p>
                </Button>
                <motion.div variants={fadeIn("","", 2, 1)} className='flex mx-auto md:mx-0 gap-5 justify-center sm:justify-between mt-[20px] md:mt-[94px] w-[285px] h-[85px]'>
                    <p className='unica text-[48px] sm:text-[64px] text-white'>
                        00<span className='text-[14px]'>H</span>
                    </p>
                    <p className='unica text-[48px] sm:text-[64px] text-white'>
                        00<span className='text-[14px]'>M</span>
                    </p>
                    <p className='unica text-[48px] sm:text-[64px] text-white'>
                        00<span className='text-[14px]'>S</span>
                    </p>
                </motion.div>
            </div>

            {/* Right Hero*/}
            <div className='w-full'>
                <h2
                    className='text-white sm:mt-0 mt-[-400px] text-center sm:mb-0 
                    sm:text-[20px] text-[16px]
                lg:text-[24px] lg:w-[490px]
                xl:text-[22px]  
                2xl:text-[36px] 2xl:w-full
                font-[Montserrat] font-bold float-right'>
                    <Typewriter
                        options={{
                            strings: ['Igniting a Revolution in HR Innovation'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    <Image
                        src='/line.png'
                        alt='Line'
                        width={253}
                        height={11}
                        className='float-right sm:w-[200px] w-[100px] 
                        md:w-[100px] lg:w-[140px] xl:w-[140px] 2xl:w-[253px]' />
                </h2>

                <div>
                    <div
                        className='absolute -z-50 bg-blend-hard-light mix-blend-hard-light 
                    scale-100 xl:scale-[80%] lg:scale-[90%] '>
                        <Image src='/glow.png' alt='Glow' width={667} height={641}
                            className='bg-blend-hard-light' />
                    </div>
                    <div
                        className='relative w-full h-full 
                    max-w-[828px] max-h-[715px] bg-cover sm:mt-0 mt-[-40px]
                    bg-no-repeat mix-blend-luminosity
                    top-[200px] mb-[-128px] 
                    sm:top-[200px] sm:mb-[-430px]
                    md:scale-90 md:top-[198px]
                    lg:scale-[90%] lg:top-[190px]
                    xl:scale-[90%] xl:top-[200px]
                    2xl:bottom-[0px] 2xl:scale-[85%]
                    3xl:top-[135px] 3xl:scale-75'>
                        <Image src='/man.png' alt='Man' width={828} height={715}
                            className='' />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default SectionWrapper(HeroPage, "hero")