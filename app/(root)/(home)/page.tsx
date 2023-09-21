"use client"
import {
  HeroPage,
  IdeaPage,
  RulesPage,
  CriteriaPage,
  FaqPage,
  PrivacyPage,
  TimelinePage,
  PrizePage,
  PartnersPage
} from '@/components/index'
import { Button } from '@/components/ui/button'
import Image from 'next/image'




const HomePage = () => {
  return (
    <main className='overflow-x-hidden'>
      <div className='mx-auto flex-center max-w-screen-3xl w-full paddings flex-col'>
        <HeroPage />
      </div>
      <hr className="-mt-16 opacity-30" />
      <div className='mx-auto flex-center max-w-screen-3xl w-full paddings flex-col'>
        <IdeaPage />
      </div>
      <hr className="opacity-30" />
      <div className='mx-auto flex-center max-w-screen-3xl paddings w-full flex-col'>
        <RulesPage />
      </div>
      <hr className="opacity-30" />
      <div className='mx-auto flex-center max-w-screen-3xl paddings w-full flex-col'>
        <CriteriaPage />
      </div>
      <hr className="opacity-30" />
      <div id='faq' className='mx-auto flex-center max-w-screen-3xl paddings w-full flex-col'>
        <FaqPage />
      </div>
      <hr className="opacity-30" />
      <div id='timeline' className='mx-auto flex-center max-w-screen-3xl paddings w-full flex-col'>
        <TimelinePage />
      </div>

      <div className=''>
        <div className='mx-auto flex-center max-w-screen-3xl w-full flex-col paddings'>
          <PrizePage />
        </div>
      </div>

      <div className='mx-auto flex-center max-w-screen-3xl w-full flex-col paddings'>
        <PartnersPage />
      </div>

      <hr className="-mt-16 opacity-30" />
      <div className='mx-auto flex-center max-w-screen-3xl paddings w-full flex-col'>
        <PrivacyPage />
      </div>
    </main>
  )
}

export default HomePage

{/* bg-site bg-cover bg-no-repeat prize-bg mix-blend-hard-light */ }