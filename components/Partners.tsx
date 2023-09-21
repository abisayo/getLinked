import Image from 'next/image'

const PartnersPage = () => {
    return (
        <section className='w-full flex-col justify-evenly py-[0px] bg-backgroundImage-site bg-cover'>
            {/* Purple Bg blur */}
            <div
                className='absolute -z-50 mix-blend-hard-light
                 bg-no-repeat opacity-80 blur -left-6 mt-[-100px]'>
                <Image
                    src='/purple-lens.png'
                    alt='purple-lens'
                    width={1037}
                    height={948} />
            </div>
            <div>
                <h3 className='sm:text-[32px] text-[20px] text-white font-bold leading-[28px] text-center'>
                    Partners and Sponsors
                </h3>
                <p className='text-white font-[Montserrat] sm:text-[14px] text-[13px] text-center mt-[22px] leading-[28px]'>
                    Getlinked Hackathon 1.0 is honored to have the following major <br />companies as its partners and sponsors
                </p>
            </div>

            {/* Logo designs */}
            <div className='partners xl:w-[1255px] xl:h-[560px] mx-auto mt-[65px] 
          md:p-32 sm:p-16 px-6 2xl:scale-100 xl:scale-75 scale-[100%] mb-36'>
                <div className='grid grid-cols-5 auto-cols-auto justify-items-center'>
                    <div className='md:border-b-2 border-b-2 md:p-5 sm:p-3 pt-3 lg:w-[260px] boder-bottom'>
                        <Image src='/liberty.png' width={121} height={114} alt='Liberty'
                            className='mx-auto sm:scale-100 scale-[80%]' />
                    </div>
                    <div className='lg:mt-[30px] sm:scale-[80%] scale-50'>
                        <Image src='/line-p.png' width={4} height={100} alt='Line' />
                    </div>
                    <div className='md:pt-16 pt-10 md:border-b-2 border-b-2 lg:w-[260px] boder-bottom'>
                        <Image src='/libertypay.png' width={214} height={40} alt='Libertypay'
                            className='mx-auto' />
                    </div>
                    <div className='lg:mt-[30px] sm:scale-[80%] scale-50'>
                        <Image src='/line-p.png' width={4} height={100} alt='Line' />
                    </div>
                    <div className='sm:pt-0 pt-4 md:border-b-2 border-b-2 lg:w-[260px] boder-bottom '>
                        <Image src='/winwise.png' width={132} height={108} alt='Winwise' className='mx-auto sm:scale-100 scale-75' />
                    </div>
                    <div className='md:pt-6 pt-3 lg:w-[260px] md:scale-100 scale-75'>
                        <Image src='/whispersms.png' width={148} height={110} alt='Whimsperms' className='mx-auto' />
                    </div>
                    <div className='lg:mt-[30px] sm:scale-[80%] scale-50'>
                        <Image src='/line-p.png' width={4} height={100} alt='Line' />
                    </div>
                    <div className='md:pt-12 pt-8 lg:w-[260px] md:scale-100 scale-75'>
                        <Image src='/paybox.png' width={205} height={21} alt='paybox' className='mx-auto' />
                    </div>
                    <div className='lg:mt-[30px] sm:scale-[80%] scale-50'>
                        <Image src='/line-p.png' width={4} height={100} alt='Line' />
                    </div>
                    <div className='md:pt-12 pt-8 lg:w-[260px] md:scale-100 scale-90'>
                        <Image src='/plus.png' width={231} height={21} alt='Liberty' className='mx-auto' />
                    </div>
                </div>
            </div>
            {/* Purple Bg blur */}

            <div
                className='absolute mix-blend-hard-light
                 bg-no-repeat opacity-80 blur -right-0 mt-[-300px]'>
                <Image
                    src='/purple-lens.png'
                    alt='purple-lens'
                    width={1037}
                    height={948} />
            </div>
        </section>
    )
}

export default PartnersPage