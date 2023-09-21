import { Button } from '@/components/ui/button'
import Image from 'next/image'

const PrivacyPage = () => {
    return (
        <section className='w-full lg:flex justify-evenly lg:py-[200px] lg:mb-0 mb-10'>
            {/* Left */}
            <div className=''>
                <h3 className='lg:w-[300px] lg:h-[78px] lg:text-[32px] text-[20px] lg:text-left text-center text-white font-bold'>
                    Privacy Policy and <br /><span className='text-pink'>Terms</span>
                </h3>
                <p className='mt-[17px] text-white font-[Montserrat] lg:text-left text-center text-[14px] leading-[28px]'>
                    Last updated on September 12, 2023
                </p>
                <p className='lg:w-[438px] lg:h-[52px] mt-[30px] text-white font-[Montserrat] lg:text-left text-center text-[14px] leading-[27px]'>
                    Below are our privacy & policy, which outline a lot of goodies.
                    it’s our aim to always take of our participant
                </p>

                <div className='mt-[69px] border-[1px]
             border-pink rounded-md lg:w-[569px] 
             lg:h-[608px] sm:px-[72px] px-[25px] py-[59px] -mb-[300px]'>
                    <p className='lg:w-[425px] lg:h-[180px] text-white font-[Montserrat] text-[14px] lg:text-left text-center leading-[31px]'>
                        At getlinked tech Hackathon 1.0, we value your privacy
                        and are committed to protecting your personal information.
                        This Privacy Policy outlines how we collect, use, disclose,
                        and safeguard your data when you participate in our tech
                        hackathon event. By participating in our event, you consent
                        to the practices described in this policy.
                    </p>
                    <p className='text-pink text-[16px]  font-bold font-[Montserrat] leading-[35px] mt-[24px]'>
                        Licensing Policy
                    </p>
                    <p className='text-white text-[14px] font-bold font-[Montserrat] leading-[31px]'>
                        Here are terms of our Standard License:
                    </p>
                    <div className='mt-[17px] flex flex-row items-center gap-[16px] sm:mb-0 mb-14'>
                        <Image src='/ok.png' height={17} width={17} alt='OK' className='' />
                        <p className='w-[401px] h-[50px] text-white font-[Montserrat] text-[14px] leading-[31px]'>
                            The Standard License grants you a non-exclusive right to
                            navigate and register for our event
                        </p>
                    </div>
                    <div className='mt-[18px] flex flex-row items-center gap-[16px]'>
                        <Image src='/ok.png' height={17} width={17} alt='OK' className='' />
                        <p className='w-[401px] h-[50px] text-white font-[Montserrat] text-[14px] leading-[31px]'>
                            You are licensed to use the item available at any free source
                            sites, for your project developement
                        </p>
                    </div>

                    <Button
                        className='text-button font-light font-[Montserrat] 
                        w-[172px] h-[53px] sm:mt-[33px] flex mx-auto mt-16'>
                        <p className='text-white font-normal text-[16px] leading-normal'>Read More</p>
                    </Button>
                </div>
                {/* Purple Bg blur */}
                <div
                    className='absolute mix-blend-hard-light
                 bg-no-repeat opacity-80 blur -z-50 -left-8'>
                    <Image
                        src='/purple-lens.png'
                        alt='purple-lens'
                        width={1037}
                        height={948} />
                </div>
            </div>

            {/* Right */}
            <div className='lg:mt-0 mt-[300px] lg:mb-0 mb-[-100px]'>
                <Image src='/privacy.png' alt='Privacy' width={570} height={900} 
                className='lg:scale-100 scale-75 mx-auto'/>
            </div>
        </section>
    )
}

export default PrivacyPage