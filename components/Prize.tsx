import Image from 'next/image'

const PrizePage = () => {
    return (
        <section className='w-full sm:py-[100px] py-[80px] md:flex justify-evenly 
        '>
            {/* Purple Bg blur */}
            <div
                className='absolute -z-50 mix-blend-hard-light
                 bg-no-repeat opacity-80 blur -left-8 '>
                <Image
                    src='/purple-lens.png'
                    alt='purple-lens'
                    width={1037}
                    height={948} />
            </div>
            {/* Left */}
            <div className='flex-center mx-auto'>
                <Image src='/prize-img.png' width={548} height={482} alt='prize'
                className='lg:scale-100 relative scale-75 sm:mt-0' />
            </div>

            {/* Right*/}
            <div className=' mx-auto px-10'>
                <div className='sm:mt-0 mt-[-500px] sm:mb-0 mb-[300px]'>
                <h3 className='text-white lg:text-[32px] lg:text-left 
                text-center text-[20px] font-bold'>
                    Prizes and <br /><span className='text-pink'>Rewards</span>
                </h3>
                <p className='mt-[16px] font-[Montserrat] lg:text-[16px] text-[13px] lg:text-left text-center leading-[28px] text-white'>
                    Highlight of the prizes or rewards for winners and <br />for participants.
                </p>
                </div>

                {/*  Medals */}
                <div className='flex lg:mt-16 lg:scale-100 md:scale-75 justify-center scale-[60%]'>
                    {/*Silver */}
                    <div className='scale-95 pt-20'>
                        <div className='flex-center'>
                            <Image src='/silver.png' width={179} height={180} alt='silver' />
                        </div>
                        <div className='w-[212px] h-[296px] silv -z-40 mt-[-100px]'>
                            <h3 className='font-[Montserrat] text-[36px] 
                      font-bold leading-[30px] text-white text-center mt-32'>
                                2nd
                            </h3>
                            <p className='font-[Montserrat] text-[24px] font-semibold leading-[52px] text-white text-center'>
                                Runner
                            </p>
                            <h3 className='font-bold font-[Montserrat] text-pink text-[32px] leading-[50px] text-center'>
                                N300,000
                            </h3>
                        </div>
                    </div>

                    <div>
                        <div className='flex-center'>
                            <Image src='/gold.png' width={296} height={296} alt='silver' />
                        </div>
                        <div className='w-[212px] h-[347px] gol -z-40 mt-[-170px] mx-auto'>
                            <h3 className='font-[Montserrat] text-[36px] 
                      font-bold leading-[30px] text-white text-center mt-48'>
                                1st
                            </h3>
                            <p className='font-[Montserrat] text-[24px] font-semibold leading-[52px] text-white text-center'>
                                Runner
                            </p>
                            <h3 className='font-bold font-[Montserrat] text-purple text-[32px] leading-[50px] text-center'>
                                N400,000
                            </h3>
                        </div>
                    </div>

                    <div className='scale-95 pt-20'>
                        <div className='flex-center'>
                            <Image src='/bronze.png' width={179} height={180} alt='silver' />
                        </div>
                        <div className='w-[212px] h-[296px] silv -z-40 mt-[-100px]'>
                            <h3 className='font-[Montserrat] text-[36px] 
                      font-bold leading-[30px] text-white text-center mt-32'>
                                3rd
                            </h3>
                            <p className='font-[Montserrat] text-[24px] font-semibold leading-[52px] text-white text-center'>
                                Runner
                            </p>
                            <h3 className='font-bold font-[Montserrat] text-pink text-[32px] leading-[50px] text-center'>
                                N150,000
                            </h3>
                        </div>
                    </div>
                </div>

                {/* Purple Bg blur */}
                <div
                    className='absolute mix-blend-hard-light
                 bg-no-repeat opacity-80 blur -right-38 mt-[-300px] mr-[-0px]'>
                    <Image
                        src='/purple-lens.png'
                        alt='purple-lens'
                        width={1037}
                        height={948} />
                </div>
            </div>
        </section>
    )
}

export default PrizePage