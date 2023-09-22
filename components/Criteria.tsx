import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { slideIn } from '@/utils/motion';
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';

const CriteriaPage = () => {
    return (
        <section className='w-full md:flex justify-evenly py-[20px] '>
            {/* Left */}
            <div className='absolute mt-[0px] ml-[-1000px] animate-pulse'>
                <Image src='/star-pu.png' width={30} height={36} alt='Fire' />
            </div>
            <motion.div variants={slideIn("left", "type", 0.5, 1)} className='md:pt-[130px]'>
                <Image src='/criteria.png' alt='Big Idea' width={710} height={587}
                    className='md:-mb-[400px] 3xl:scale-100 scale-75' />
                {/* Purple Bg blur */}
                <div
                    className='absolute -z-50 mix-blend-hard-light
                 bg-no-repeat opacity-80 blur -left-8 md:mt-0 mt-[-400px] md:mr-0 mr-[150px]'>
                    <Image
                        src='/purple-lens.png'
                        alt='purple-lens'
                        width={1037}
                        height={948} />
                </div>
            </motion.div>
            <div className='absolute mt-[450px] ml-[-700px] animate-pulse'>
                <Image src='/star.png' width={30} height={36} alt='Fire' />
            </div>
            <div className='absolute mt-[700px] ml-[-100px] animate-ping'>
                <Image src='/star.png' width={30} height={36} alt='Fire' />
            </div>

            {/* Right */}
            <motion.div variants={slideIn("right", "type", 0.5, 1)} className='md:pb-[30px] md:mx-0 px-16'>
                <h3 className='md:text-[32px] text-[20px] text-white font-bold md:text-left text-center'>Judging Criteria <br /><span className='text-pink'>Key attributes</span></h3>
                <p className='md:w-[533px] md:h-[75px] text-[14px] font-[Montserrat] md:text-left text-center leading-[28px] text-white mt-[21px]'>
                    <span className='text-violet text-[16px] font-bold'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                    solution. Consider whether it addresses a real-world problem in a novel
                    way or introduces innovative features.
                </p>
                <p className='md:w-[509px] md:h-[75px] text-[14px] md:text-left text-center font-[Montserrat] leading-[28px] text-white mt-[22px]'>
                    <span className='text-violet text-[16px] font-bold'>Functionality:</span> Assess how well the solution works.
                    Does it perform its intended functions effectively and without major issues?
                    Judges would consider the completeness and robustness of the solution.
                </p>
                <p className='md:w-[524px] md:h-[99px] text-[14px] md:text-left text-center font-[Montserrat] leading-[28px] text-white mt-[27px]'>
                    <span className='text-violet text-[16px] font-bold'>Impact and Relevance:</span> Determine the potential impact of the solution in the real world.
                    Does it address a significant problem, and is it relevant to the target audience?
                    Judges would assess the potential social, economic, or environmental benefits.
                </p>
                <p className='md:w-[558px] md:h-[75px] text-[14px] md:text-left text-center font-[Montserrat] leading-[28px] text-white mt-[23px]'>
                    <span className='text-violet text-[16px] font-bold'>Technical Complexity:</span> Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of advanced technologies
                    or algorithms, and the scalability of the solution.
                </p>
                <p className='md:w-[564px] md:h-[75px] text-[14px] md:text-left text-center font-[Montserrat] leading-[28px] text-white mt-[28px]'>
                    <span className='text-violet text-[16px] font-bold'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon,
                    including deadlines, use of specific technologies or APIs, and any other.
                    competition-specific requirements
                </p>
                <Button
                    className='text-button font-light font-[Montserrat] 
                    w-[172px] h-[53px] mt-[63px] md:mx-0 mx-auto flex'>
                    <p className='text-white font-normal text-[16px] leading-normal'>Read More</p>
                </Button>
                {/* Purple Bg blur */}
                <div
                    className='absolute -z-40 mix-blend-hard-light
                 bg-no-repeat opacity-80 blur -right-38 md:mt-[] mt-[-300px] md:mr-[] mr-[-0px]'>
                    <Image
                        src='/purple-lens.png'
                        alt='purple-lens'
                        width={1037}
                        height={948} />
                </div>
            </motion.div>
        </section>
    )
}

export default SectionWrapper(CriteriaPage, "criteria")