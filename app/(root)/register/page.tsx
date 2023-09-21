"use client"

import { useState } from "react";
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import Image from 'next/image'
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';


const formSchema = z.object({
    team_name: z.string().min(2).max(50),
    team_phone: z.string().min(2).max(50),
    team_email: z.string().min(2).max(50),
    team_topic: z.string().min(2).max(50),
    team_category: z.string().min(2).max(50),
    team_size: z.string().min(2).max(50),
});

const RegisterPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            team_name: "",
            team_phone: "",
            team_email: "",
            team_topic: "",
            team_category: "",
            team_size: "",
        },
    });

    const onSubmit = () => {

    }

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <svg fill="currentColor" viewBox="0 0 20 20" width={28} height={28}>
            <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
            ></path>
        </svg>
    );

    return (
        <main className=''>
            <div className='mx-auto flex-center max-w-screen-3xl w-full paddings'>
                <section className='w-full flex-center justify-between py-[100px] flex-col xl:flex-row'>
                    {/* Purple Bg blur */}
                    <div
                        className='absolute mix-blend-hard-light -z-40
                 bg-no-repeat opacity-80 blur -left-10 -mt-[700px] mr-[0px] 2xl:mt-[0px]'>
                        <Image
                            src='/purple-lens.png'
                            alt='purple-lens'
                            width={1037}
                            height={948} />
                    </div>
                    {/* Left */}
                    <div className='md:w-full md:h-full w-[195px] h-[155px] mx-auto mb-[50px]'>
                        <Image src='/register.png' width={717} height={717} alt='Register' />
                    </div>


                    {/* Right */}
                    <div
                        className='
             shadow-gray-700 w-full h-full
               boxes rounded-md md:px-[92px] md:py-[65px]
               px-[24px] py-[23px]'>
                        <h3 className='text-pink text-[32px] font-bold'>
                            Register
                        </h3>
                        <div className='flex md:gap-3 gap-2 items-center'>
                            <p className='text-white font-[Montserrat] md:text-[14px] text-[12px] md:mt-[46px] mt-[30px]'>
                                Be part of this movement!
                            </p>
                            <Image src='/register-p.png' alt='Register' height={0} width={100}
                                className='w-[101px] h-[30px] md:mt-7 mt-3' />
                        </div>
                        <h3 className='text-white font-[Montserrat] md:text-[24px] text-[20px] mt-[19px]'>
                            CREATE YOUR ACCOUNT
                        </h3>

                        {/* Form */}

                        <div className='mt-[33px] gap-[49px]'>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-[18px]">
                                        <FormField
                                            control={form.control}
                                            name="team_name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='text-white text-[14px] font-[Montserrat]'>
                                                        Team's Name
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className='input mt-[11px] input-text text-center 2xl:w-[263px] 2xl:h-[47px]'
                                                            placeholder='Enter the name of your group' {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )} />
                                        <FormField
                                            control={form.control}
                                            name="team_phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel className='text-white text-[14px] font-[Montserrat]'>
                                                        Phone
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className='input mt-[11px] input-text text-center 2xl:w-[263px] 2xl:h-[47px]'
                                                            placeholder='Enter your phone number' {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )} />
                                        <FormField
                                            control={form.control}
                                            name="team_email"
                                            render={({ field }) => (
                                                <FormItem className="md:mt-[30px]">
                                                    <FormLabel className='text-white text-[14px] font-[Montserrat]'>
                                                        Email
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className='input mt-[11px] input-text text-center 2xl:w-[263px] 2xl:h-[47px]'
                                                            placeholder='Enter your email address' {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )} />
                                        <FormField
                                            control={form.control}
                                            name="team_topic"
                                            render={({ field }) => (
                                                <FormItem className="md:mt-[30px]">
                                                    <FormLabel className='text-white text-[14px] font-[Montserrat]'>
                                                        Project Topic
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            className='input mt-[11px] input-text text-center 2xl:w-[263px] 2xl:h-[47px]'
                                                            placeholder='What is your group project topic' {...field}
                                                        />
                                                    </FormControl>
                                                </FormItem>
                                            )} />
                                        <FormField
                                            control={form.control}
                                            name="team_category"
                                            render={({ field }) => (
                                                <FormItem className="md:mt-[30px]">
                                                    <FormLabel className='text-white text-[14px] font-[Montserrat]'>
                                                        Category
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Select >
                                                            <SelectTrigger className='input mt-[11px] input-text text-center text-[10px] 2xl:w-[263px] 2xl:h-[47px]'>
                                                                <SelectValue placeholder="Select your category" className="" />
                                                            </SelectTrigger>
                                                            <SelectContent className="bg-white">
                                                                <SelectItem value="light">Light</SelectItem>
                                                                <SelectItem value="dark">Dark</SelectItem>
                                                                <SelectItem value="system">System</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                </FormItem>
                                            )} />
                                        <FormField
                                            control={form.control}
                                            name="team_size"
                                            render={({ field }) => (
                                                <FormItem className="md:mt-[30px]">
                                                    <FormLabel className='text-white text-[14px] font-[Montserrat]'>
                                                        Group Size
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Select >
                                                            <SelectTrigger className='input mt-[11px] input-text text-center 2xl:w-[263px] 2xl:h-[47px]'>
                                                                <SelectValue placeholder="Select" />
                                                            </SelectTrigger>
                                                            <SelectContent className="bg-white">
                                                                <SelectItem value="light">Light</SelectItem>
                                                                <SelectItem value="dark">Dark</SelectItem>
                                                                <SelectItem value="system">System</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </FormControl>
                                                </FormItem>
                                            )} />

                                    </div>

                                    <p className="text-violet font-[Montserrat] text-[12px] italic mt-[23px]">
                                        Please review your registration details before submitting
                                    </p>

                                    <div className="flex items-center gap-[10px]">
                                        <Checkbox />
                                        <p className="text-white font-[Montserrat] text-[12px]">I agreed with the event terms and conditions  and privacy policy</p>
                                    </div>

                                    <Button
                                        className='text-button font-light font-[Montserrat] w-full h-[53px] mt-[41px]'
                                        onClick={onOpenModal}>
                                        <p className='text-white font-normal text-[16px] leading-normal'>Register</p>
                                    </Button>
                                    {/* Modal */}
                                    <Modal
                                        open={open}
                                        onClose={onCloseModal}
                                        center
                                        classNames={{
                                            overlay: 'customOverlay',
                                            modal: 'customModal',
                                        }}
                                        closeIcon={closeIcon}
                                        styles={{
                                            overlay: {
                                                background: "rgba(21, 14, 40, 0.93)",
                                            },
                                            modal: {
                                                backgroundColor: "transparent"
                                            },
                                            closeIcon: {
                                                backgroundColor: "#fff"
                                            }
                                        }}>
                                        <div className="md:w-[699px] md:h-[664px] modal px-[71px] py-[52px] content-center">
                                            <Image src='/game.png' alt="success" width={300} height={300} className="mx-auto" />
                                            <p className="text-white font-[Montserrat] text-[16px] md:text-[32px] font-semibold text-center">
                                                Congratulations <br />you have successfully Registered!
                                            </p>
                                            <p className="text-white font-[Montserrat] text-[12px] md:text-[14px] text-center mt-[29px] md:mt-[10px]">
                                                Yes, it was easy and you did it! <br /> check your mail box for next step
                                            </p>
                                            <Button
                                                className='text-button font-light font-[Montserrat] w-full h-[53px] mt-[41px]'
                                                onClick={onCloseModal}>
                                                <p className='text-white font-normal text-[16px] leading-normal'>Back</p>
                                            </Button>
                                        </div>
                                    </Modal>
                                </form>
                            </Form>
                        </div>
                        {/* Purple Bg blur */}
                        <div
                            className='absolute mix-blend-hard-light -z-50
                 bg-no-repeat opacity-80 blur -right-0 -mt-[300px]'>
                            <Image
                                src='/purple-lens.png'
                                alt='purple-lens'
                                width={1037}
                                height={948} />
                        </div>

                    </div>
                </section>
            </div>
        </main>
    )
}

export default RegisterPage