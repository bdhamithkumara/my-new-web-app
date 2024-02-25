import React from 'react'
import HeroImage1 from '../../../public/images/hero/HeroImage1.png'
import HeroImage2 from '../../../public/images/hero/HeroImage2.png'
import HeroImage3 from '../../../public/images/hero/HeroImage3.png'
import HeroImage4 from '../../../public/images/hero/HeroImage4.png'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section className='xxl:mx-20 lg:mx-18 mx-auto overflow-hidden'>
            <div className='flex justify-center lg:mt-[120px] mt-[70px] lg:mb-[65px]'>
                <div className='flex flex-wrap xxl:w-[1260px] xl:w-[1180px] lg:w-[945px]'>
                    <div className='lg:w-[50%] w-[100%] my-auto z-20'>
                        <div>
                            <div className='mt-5'>
                                <h1 className='text-[#001049] font-JostM500 xxl:text-[80px] xl:text-[75px] lg:text-[60px] text-[48px] leading-tight lg:w-[700px] md:w-[500px] w-[340px]'>
                                    Develope your skill without diligence
                                </h1>
                            </div>
                            <div className='mt-5'>
                                <p className='text-[#001049] font-JostM500 xl:text-[16px] md:text-[14px] xl:w-[500px] lg:w-[440px] w-[340px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                            </div>
                            <div className='flex gap-4 mt-10 w-full'>
                                <div>
                                    <button className='lg:w-auto h-auto rounded-[10px] bg-[#003FE6] text-white text-base font-JostM500 py-4 lg:px-12 px-10'>
                                        Get started
                                    </button>
                                </div>
                                <div>
                                    <button className='w-auto h-auto rounded-[10px] border-[1px] border-[#003FE6] font-JostM500 text-base text-[#001049] py-4 lg:px-10 px-12'>
                                        Discount
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex flex-col lg:w-[50%] hidden z-10 gap-5'>
                        <div className='flex gap-5'>
                                <div className='xl:w-[295px] xl:h-[295px] lg:w-[250px] lg:h-[250px] bg-[#FF9292] rounded-[40px] justify-center flex'>
                                    <Image src={HeroImage1} alt='Hero Image 1' width={0} height={0} className='m-5 lg:w-[200px] lg:h-[200px] xl:w-[253px] xl:h-[253px]' loading='lazy'/>
                                </div>
                                <div className='xl:w-[295px] xl:h-[295px] lg:w-[250px] lg:h-[250px] bg-[#FFDA92] rounded-[40px] justify-center flex'>
                                    <Image src={HeroImage2} alt='Hero Image 2' width={0} height={0} className='m-5 lg:w-[200px] lg:h-[200px] xl:w-[253px] xl:h-[253px]' loading='lazy' />
                                </div>
                        </div>
                        <div className='flex gap-5'>
                            
                                <div className='xl:w-[295px] xl:h-[295px] lg:w-[250px] lg:h-[250px] bg-[#C292FF] rounded-[40px] ' >
                                    <Image src={HeroImage3} alt='Hero Image 3' className='lg:mt-6 xxl:mt-1 xl:mt-3'  loading='lazy'/>
                                </div>
                           
                                <div className='xl:w-[295px] xl:h-[295px] lg:w-[250px] lg:h-[250px] bg-[#92EBFF] rounded-[40px] '>
                                    <Image src={HeroImage4} alt='Hero Image 4' className='xl:left-[100px] xl:top-[100px] lg:left-[75px] lg:top-[100px] relative overflow-hidden'  loading='lazy'/>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection