import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { slideIn, zoomIn} from '@/utils/motion';
import { motion } from 'framer-motion';
import SectionWrapper from '@/hoc/SectionWrapper';

const FaqPage = () => {
    return (
        <section className='w-full md:flex justify-evenly py-[0px]'>
            {/* Left */}
            <motion.div variants={slideIn("left", "type", 1,1)} className='md:mt-24'>
                <h3 className='text-white md:text-[32px] text-[20px] md:text-left text-center font-bold md:w-[253px] md:h-[86px]'>
                    Frequently Ask <br /><span className='text-pink'>Question</span>
                </h3>
                <p
                    className='mt-[16px] font-[Montserrat] text-[14px] 
            leading-[28px] md:w-[342px] md:h-[55px] md:text-left text-center text-white'>We got answers to the questions that you might
                    want to ask about getlinked Hackathon 1.0</p>
                <div className='mt-[68px] font-[Montserrat] md:w-[427px]'>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger className='text-white font-[Montserrat] text-[14px] leading-[28px]'>
                                Can I work on a project I started before the hackathon?
                            </AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='mt-[25px]'>
                            <AccordionTrigger className='text-white font-[Montserrat] text-[14px] leading-[28px]'>
                                What happens if I need help during the hackathon?
                            </AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className='mt-[25px]'>
                            <AccordionTrigger className='text-white font-[Montserrat] text-[14px] leading-[28px]'>
                                What happens if I don't have an idea for a project?
                            </AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4" className='mt-[25px]'>
                            <AccordionTrigger className='text-white font-[Montserrat] text-[14px] leading-[28px]'>
                                Can I join a team or do I have to come with one?
                            </AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5" className='mt-[25px]'>
                            <AccordionTrigger className='text-white font-[Montserrat] text-[14px] leading-[28px]'>
                                What happens after the hackathon ends
                            </AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6" className='mt-[25px]'>
                            <AccordionTrigger className='text-white font-[Montserrat] text-[14px] leading-[28px]'>
                                Can I work on a project I started before the hackathon?
                            </AccordionTrigger>
                            <AccordionContent className='text-white'>
                                Yes.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </motion.div>

            {/* Right */}
            <div>
                <motion.div variants={zoomIn(1,1)} className='md:mt-0 mt-[86px]' >
                    <Image src='/faqs.png' alt='Big Idea' width={741} height={850}
                    className='lg:mt-16 md:mt-36 relative 3xl:scale-100 scale-75' />
                </motion.div>
            </div>
        </section>
    )
}

export default SectionWrapper(FaqPage, "faq");