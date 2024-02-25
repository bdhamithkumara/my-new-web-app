import React from 'react'
import DiscountSectionImage from '../../../public/images/discount/Discount1.svg'
import Image from 'next/image'

const DiscountSection = () => {
  return (
    <section className='relative'>
        <div className='left-0 absolute mt-[185px] lg:mt-0'>
            <Image src={DiscountSectionImage} alt='Discount Section Image' className='lg:w-[380px] lg:h-[406px] w-[110px] h-[120px]' width={0} height={0} />
        </div>
        <div className='xxl:mx-20 lg:mx-18 mx-auto h-auto max-w-[1700px]'>
            <div className='flex justify-center'>
                <div className="xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[340px] lg:h-[450px] sm:h-[400px] h-[350px] relative">
                    <div className='right-0 absolute mt-[50px] top-0 text-right'>
                    <h2 className='lg:text-[48px] md:text-[38px] text-[24px] font-JostM500 text-[#001049] lg:w-[600px] md:w-[480px] leading-none'>Each student can share their discount code for friends</h2>
                    <p className='text-[16px] float-right font-JostR400 text-[#001049] md:w-[477px] mt-[20px]'>
                    But I must explane to you how all this mistaken idea of  denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                    </p>
                    <div className="md:mt-[120px] mt-[150px] mb-[150px]">
                        <button className="w-[190px] bg-[#003FE6] md:h-[62px] h-[48px] rounded-[10px] text-center">
                            <span className='text-white font-JostM500 text-[14px] md:text-[16px]'>I have a Code</span>
                        </button>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default DiscountSection