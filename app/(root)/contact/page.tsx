"use client"

import { useState } from "react";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
    InstagramIcon,
    TwitterIcon,
    FacebookIcon,
    LinkedinIcon
} from 'lucide-react'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Modal } from 'react-responsive-modal';


const formSchema = z.object({
    first_name: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    message: z.string().min(2).max(50),
})


const ContactPage = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            first_name: "",
            email: "",
            message: "",
        },
    });

    const onSubmit = () => {

    }

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <main className=''>
            <div className='mx-auto flex-center max-w-screen-3xl w-full paddings'>
                <section className='w-full flex-center justify-between py-[100px] 2xl:mb-[-50px] flex-col-reverse lg:flex-row xl:gap-[225px]'>
                    {/* Purple Bg blur */}
                    <div
                        className='absolute mix-blend-hard-light -z-40
                 bg-no-repeat opacity-80 blur -left-16 -mt-[700px] mr-[0px] xl:mt-[-200px] xl:ml-[0px]'>
                        <Image
                            src='/purple-lens.png'
                            alt='purple-lens'
                            width={1037}
                            height={948} />  
                    </div>
                    {/* Left */}
                    <div className='xl:ml-[170px] lg:mt-[-100px] w-full xl:w-[280px]'>
                        <h3 className='text-pink flex xs:text-center xs:mx-auto xs:justify-center  text-[32px] font-semibold'>
                            Get in touch
                        </h3>
                        <p className='xs:mt-[17px] flex xs:text-center xs:mx-auto xs:justify-center  text-white xs:text-[16px] font-[Montserrat]'>
                            Contact <br />Information
                        </p>
                        <p className='xs:mt-[17px] flex xs:text-center xs:mx-auto xs:justify-center  text-white xs:text-[16px] font-[Montserrat]'>
                            27,Alara Street <br />Yaba 100012 <br />Lagos State
                        </p>
                        <p className='xs:mt-[21px] text-white flex xs:text-center xs:mx-auto xs:justify-center  xs:text-[16px] font-[Montserrat]'>
                            Call Us : 07067981819
                        </p>
                        <p className='xs:mt-[22px] text-white  xs:text-[16px] flex xs:text-center xs:mx-auto xs:justify-center font-[Montserrat]'>
                            we are open from Monday-Friday <br />08:00am - 05:00pm
                        </p>
                        <h4 className='xs:mt-[35px] text-pink xs:text-[16px] flex xs:mx-auto xs:justify-center font-[Montserrat]'>
                            Share on
                        </h4>
                        <div className='xs:mt-[15px] flex gap-[19px] xs:mx-auto xs:justify-center'>
                            <InstagramIcon className='text-white w-[24px] h-[24px]' />
                            <TwitterIcon className='text-white w-[24px] h-[24px]' />
                            <FacebookIcon className='text-white w-[24px] h-[24px]' />
                            <LinkedinIcon className='text-white w-[24px] h-[24px]' />
                        </div>
                    </div>

                    {/* Right */}
                    <div
                        className='w-full h-full xl:w-[617px] contact-box 
                    rounded-md  shadow-gray-700 mb-[30px] sm:px-[90px] sm:py-[65px] xs:px-[40px] xs:py-[65px]'>
                        <h3 className='text-pink text-[20px] font-semibold'>
                            Questions or need assistance?
                        </h3>
                        <h3 className='text-pink text-[20px] font-semibold'>
                            Let us know  about it!
                        </h3>
                        <div className="xl:mt-[34px]">
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onOpenModal)} className="space-y-[42px]">
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        className='input mt-[11px] input-text text-left xl:w-[437px] xl:h-[47px]'
                                                        placeholder='First Name' {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )} />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Input
                                                        className='input mt-[11px] input-text text-left w-full xl:w-[437px] xl:h-[47px]'
                                                        placeholder='Email' {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )} />
                                    <FormField
                                        control={form.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Textarea rows={5}
                                                        className='input mt-[11px] input-text text-left xl:w-[437px] xl:h-[119px]'
                                                        placeholder='Message' {...field}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )} />
                                    <Button type="submit"
                                        className='text-button font-light font-[Montserrat] xl:w-[172px] h-[53px] mt-[41px] mx-auto flex'>
                                        <p className='text-white font-normal text-[16px] leading-normal'>Submit</p>
                                    </Button>
                                </form>
                            </Form>
                        </div>
                    </div>
                    {/* Purple Bg blur */}
                    <div
                        className='absolute mix-blend-hard-light -z-40
                 bg-no-repeat opacity-80 blur -right-0 lg:mt-[650px] lg:mr-[0px]'>
                        <Image
                            src='/purple-lens.png'
                            alt='purple-lens'
                            width={1037}
                            height={948} />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default ContactPage