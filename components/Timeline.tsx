"use client"

import Image from "next/image";
import {
    PiNumberOneBold,
    PiNumberTwoBold,
    PiNumberThreeBold,
    PiNumberFourBold,
    PiNumberFiveBold,
    PiNumberSixBold
} from "react-icons/pi"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const TimelinePage = () => {
    return (
        <section className='w-full flex-col py-[100px]'>
            <h3 className='text-[32px] font-bold text-white mx-auto text-center'>
                Timeline
            </h3>
            <p className='text-white text-[14px] leading-[25px] font-[Montserrat] text-center'>
                Here is the breakdown of the time we anticipate <br />using for the upcoming event.
            </p>

            <div className='absolute mt-[50px] ml-[350px] animate-pulse'>
                <Image src='/star-pu.png' width={30} height={36} alt='Fire' />
            </div>
            <div className='absolute mt-[1600px] ml-[350px] animate-pulse'>
                <Image src='/star.png' width={30} height={36} alt='Fire' />
            </div>
            <div className='absolute mt-[620px] ml-[1350px] animate-pulse'>
                <Image src='/star.png' width={30} height={36} alt='Fire' />
            </div>
            

            <div className='mt-[91px]'>
                <VerticalTimeline lineColor='#D434FE'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#D434FE', borderBottom: '' }}
                        contentArrowStyle={{ borderRight: '7px solid  #D434FE' }}
                        date="November 18, 2023"
                        dateClassName='text-[28px]'
                        iconStyle={{
                            background: '#D434FE',
                            color: '#fff',
                        }}
                        icon={<PiNumberOneBold />}
                    >
                        <h3
                            className="vertical-timeline-element-title text-pink text-[24px] 
                        font-bold font-[Montserrat] lg:text-right">Hackathon Announcement</h3>
                        <p className='font-[Montserrat] text-[14px] leading-[24px] text-white lg:text-right'>
                            The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#D434FE', borderBottom: '' }}
                        contentArrowStyle={{ borderRight: '7px solid  #D434FE' }}
                        date="November 18, 2023"
                        dateClassName='text-[28px]'
                        iconStyle={{
                            background: '#D434FE',
                            color: '#fff',
                        }}
                        icon={<PiNumberTwoBold />}
                    >
                        <h3
                            className="vertical-timeline-element-title text-pink 
                        text-[24px] font-bold font-[Montserrat] ">Teams Registration begins</h3>
                        <p className='font-[Montserrat] text-[14px] leading-[24px] text-white'>
                            Interested teams can now show their interest in the <br />getlinked tech hackathon 1.0 2023 by proceeding to register
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#D434FE', borderBottom: '' }}
                        contentArrowStyle={{ borderRight: '7px solid  #D434FE' }}
                        date="November 18, 2023"
                        dateClassName='text-[28px]'
                        iconStyle={{
                            background: '#D434FE',
                            color: '#fff',
                        }}
                        icon={<PiNumberThreeBold />}
                    >
                        <h3 className="vertical-timeline-element-title text-pink text-[24px] font-bold font-[Montserrat] lg:text-right">Teams Registration ends</h3>
                        <p className='font-[Montserrat] text-[14px] leading-[24px] text-white lg:text-right'>
                            Interested Participants are no longer Allowed to <br />register
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#D434FE', borderBottom: '' }}
                        contentArrowStyle={{ borderRight: '7px solid  #D434FE' }}
                        date="November 18, 2023"
                        dateClassName='text-[28px]'
                        iconStyle={{
                            background: '#D434FE',
                            color: '#fff',
                        }}
                        icon={<PiNumberFourBold />}
                    >
                        <h3 className="vertical-timeline-element-title text-pink text-[24px] font-bold font-[Montserrat]">Announcement of the accepted teams and ideas</h3>
                        <p className='font-[Montserrat] text-[14px] leading-[24px] text-white'>
                            All teams whom idea has been accepted into getlinked tech <br /> hackathon 1.0 2023 are formally announced
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#D434FE', borderBottom: '' }}
                        contentArrowStyle={{ borderRight: '7px solid  #D434FE' }}
                        date="November 18, 2023"
                        dateClassName='text-[28px]'
                        iconStyle={{
                            background: '#D434FE',
                            color: '#fff',
                        }}
                        icon={<PiNumberFiveBold />}
                    >
                        <h3 className="vertical-timeline-element-title text-pink text-[24px] font-bold font-[Montserrat] lg:text-right">Getlinked Hackathon 1.0 Offically Begins</h3>
                        <p className='font-[Montserrat] text-[14px] leading-[24px] text-white lg:text-right'>
                            Accepted teams can now proceed to build their <br />ground breaking skill driven solutions
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'transparent', color: '#D434FE', borderBottom: '' }}
                        contentArrowStyle={{ borderRight: '7px solid  #D434FE' }}
                        date="November 18, 2023"
                        dateClassName='text-[28px]'
                        iconStyle={{
                            background: '#D434FE',
                            color: '#fff',
                        }}
                        icon={<PiNumberSixBold />}
                    >
                        <h3 className="vertical-timeline-element-title text-pink text-[24px] font-bold font-[Montserrat]">Demo Day</h3>
                        <p className='font-[Montserrat] text-[14px] leading-[24px] text-white'>
                            Teams get the opportunity to pitch their projects to judges. <br />The winner of the hackathon will also be announced on <br />this day
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>

            </div>

        </section>
    )
}

export default TimelinePage