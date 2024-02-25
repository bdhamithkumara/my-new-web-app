"use client"
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import Logo from '../../../public/images/logo.svg'
import Image from 'next/image';

const NavbarSection = () => {

    const [open, setOpen] = useState(false)

    const Links = [
        {name : 'Features' , link: '#'},
        {name : 'Pricing' , link: '#'},
        {name : 'Overview' , link: '#'},
        {name : 'About' , link: '#'},
    ]

    return (
        <section className='w-full fixed top-0 left-0 z-100 flex justify-center'>
            <div className='xxl:mx-20 lg:mx-18 mx-auto max-w-[1260] w-full'>
                <div className='flex sm:flex md:flex items-center justify-between text-[#2A3354] lg:px-4 md:px-10 px-1 lg:pt-5 lg:pb-5 h-[75px] background-filter'>

                    {/*logo*/}
                    <div className='cursor-pointer'>
                        <Image src={Logo} alt='Logo' className='lg:w-[75px] lg:h-[75px] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] ml-[8px] lg:ml-0' />
                    </div>

                    <div className='absolute md:right-[40px] right-[8px] top-4 cursor-pointer lg:hidden' onClick={() => setOpen(!open)}>
                        <span>{open ? <AiOutlineClose className='w-[30px] h-[30px] mt-[8px]' /> : <GiHamburgerMenu className='w-[30px] h-[30px] mt-[8px]' />}</span>
                    </div>

                    <div className={`lg:flex lg:items-center justify-between lg:pb-0 z-50 absolute lg:static lg:z-auto left-0 w-full lg:w-auto lg:pl-0 transition-all duration-500 ease-in top-[73px] ${open ? 'left-0' : 'left-[-100%]'}`}>
                        <div className='lg:flex lg:items-center h-auto pb-10 lg:pb-0 bg-white lg:bg-transparent lg:rounded-none rounded-b-3xl border-b-2 lg:border-none lg:pt-0 pt-[35px]'>

                            <ul className='lg:flex lg:items-center mx-auto'>
                                {Links.map((link,i) => (
                                    <li key={i} className='text-center lg:ml-8 text-[16px] mb-10 lg:mb-5 cursor-pointer font-JostM500 pt-[20px]'>
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>

                            <div className='text-center flex-col md:justify-center flex lg:flex-row gap-10 mt-4 lg:mt-0 lg:hidden'>
                                    <div className='bg-white text-[#2A3354] py-3 px-5 rounded-[10px] mx-auto w-fit cursor-pointer text-[16px] font-JostM500 border-[1px] border-[rgba(00,10,49,0.2)]'>
                                        Sign Up
                                    </div>
                                    <div className='bg-transparent text-[#2A3354] py-1 px-5 mx-auto w-fit cursor-pointer text-[16px] font-JostM500 flex'>
                                    <span className='flex '><TfiWorld className='my-auto mr-[5px]'/>English</span>
                                    </div>
                            </div>

                        </div>
                    </div>

                    {/*dektop button*/}
                    <div className='flex-col flex lg:flex-row lg:mt-0 invisible lg:visible gap-2'>
                        <div>
                            <div className='bg-transparent text-[#2A3354] py-3 px-5 mx-auto w-fit cursor-pointer text-[16px] font-JostM500 flex'>
                                <span className='flex mr-[5px]'><TfiWorld className='my-auto mr-[5px]'/>English</span>
                            </div>
                        </div>
                        <div>
                            <div className='bg-[#ffffff] text-[#2A3354] py-3 px-5 rounded-[10px] mx-auto w-fit cursor-pointer text-[16px] font-JostM500 border-[1px] border-[rgba(00,10,49,0.2)]'>
                                Sign Up
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default NavbarSection