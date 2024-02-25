import React from 'react'
import Image from 'next/image'
import BenefitsSectionImage from '../../../public/images/benefits/BenefitsSectionImage.png'

const BenefitsSection = () => {
    return (
        <section className='w-full mb-10 lg:custom-color'>
            <div className='xxl:mx-20 lg:mx-18 mx-auto h-auto'>
                <div className='flex justify-center'>
                    <div className='xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[430px] flex lg:mt-[80px] lg:justify-between justify-center overflow-hidden'>
                        <div className='xxl:w-[55%] xl:w-[50%] lg:w-[45%] w-[98%]'>
                            <div className="flex-row">
                                <div className='flex'>
                                    <div className='w-[85px] h-[85px] rounded-[10px] bg-[#5685FF] bg-opacity-50'>
                                        <h3 className='text-[#001049] font-JostR400 text-[41px] text-center pt-[12px]'>1</h3>
                                    </div>
                                    <div className='ml-[20px] flex flex-col mt-1'>
                                        <span className='font-JostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#001049] xl:w-[400px] lg:w-[290px] md:w-[318px] sm:w-[215px] w-[200px] leading-none '>We have been improving our product </span>
                                        <span className="font-JostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#5685FF] ">for many years</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='lg:ml-[105px] flex flex-col mt-1'>
                                        <p className='font-JostR400 text-[16px] text-[#2A3354] xl:w-[309px] lg:w-[250px] leading-tight mt-[15px]'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                    </div>
                                </div>

                                <div className='flex lg:mt-4 mt-6'>
                                    <div className='w-[85px] h-[85px] rounded-[10px] bg-[#5685FF] bg-opacity-50'>
                                        <h3 className='text-[#001049] font-JostR400 text-[41px] text-center pt-[12px]'>2</h3>
                                    </div>

                                    <div className='ml-[20px] flex flex-col mt-1'>
                                        <span className='font-JostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#001049] leading-none xl:w-[412px] lg:w-[309px] md:w-[240px] w-[180px]'>You can practice at any</span>
                                        <span className='font-JostM500 xl:text-[40px] md:text-[30px] sm:text-[25px] text-[24px] text-[#5685FF] leading-none'>time convenient for you</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='lg:ml-[105px] flex flex-col mt-1'>
                                        <p className='font-JostR400 text-[16px] text-[#2A3354] xl:w-[420px] lg:w-[275px] md:w-[375px] leading-tight mt-[15px]'>
                                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                        </p>
                                    </div>
                                </div>
                                <div className="md:mt-[45px] md:ml-[105px] lg:mb-20 mt-8">
                                    <button className='md:w-[190px] bg-[#003FE6] md:h-[62px] h-[48px] w-[98%] rounded-[10px] text-center'>
                                        <span className='text-white font-JostM500 text-[14px] md:text-[16px]'>Get started</span>
                                    </button>
                                </div>

                            </div>
                        </div>
                        <div className='xxl:w-[40%] xl:w-[45%] lg:w-[55%] hidden lg:block'>
                            <div className="xl:mt-[125px] lg:mt-[165px] xl:ml-[16px] relative">
                                <Image src={BenefitsSectionImage} alt='Benefits Section Image' width={0} height={0} className='w-[504px] xl:h-[460px] lg:h-[420px] absolute'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BenefitsSection