import React from 'react'
import Logo from '../../../public/images/logo.svg'
import LargeLogo from '../../../public/images/footer/logoLarge.svg'
import Image from 'next/image'

const FooterSection = () => {
  return (
    <section className='w-full bg-[#DFE8FF] mt-5 '>
      <div className='xxl:mx-20 lg:mx-18 mx-auto '>
        <div className='flex justify-center'>
          <div className='xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[340px] h-auto'>
            <div className='flex justify-between lg:flex-row flex-col'>
              <div>
                <div className='mt-[40px] hidden lg:block'>
                  <Image src={Logo} alt="Logo" />
                </div>
                <div className='mt-[26px]'>
                  <p className='text-[#001049] font-JostR400 text-[14px] w-[313px]'>But I must explane to you how all this mistaken idea of  denouncing pleasure and praising pain was born and I will give you</p>
                </div>
                <div>
                  <div className='mt-[30px] flex'>
                    <input type='email' placeholder='Enter email' className='border-opacity-25 border-[2px] border-[#001049] rounded-l-[10px] md:h-[62px] h-[48px] xl:w-[242px] lg:w-[180px] pl-[20px] relative bg-[#DEF8FF] ml-[10px] md:ml-0'/>
                    <button className='xl:w-[156px] w-[146px] bg-[#003FE6] md:h-[62px] h-[48px] rounded-[10px] text-center absolute xl:ml-[200px] md:ml-[168px] ml-[180px]'>
                    <span className='text-white font-JostM500 text-[14px] md:text-[16px]'>Subcribe</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className='grid xl:gap-20 lg:gap-14 gap-10 lg:grid-cols-3 grid-cols-2 lg:mt-[68px] md:mt-[58px] mt-[40px] mb-5'>
                <div className='lg:ml-[60px]'>
                  <ul>
                    <li className='font-JostM500 text-[16px] text-[#001049]'>Platform</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>Overview</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>Features</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>About</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>Pricing</li>
                  </ul>
                </div>
                <div>
                <ul>
                    <li className='font-JostM500 text-[16px] text-[#001049]'>Help</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>How does it work?</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>Where to ask to questions?</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>How to pay?</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>What is needed for this?</li>
                  </ul>
                </div>
                <div>
                <ul>
                    <li className='font-JostM500 text-[16px] text-[#001049]'>Contacts</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>(716) 532-3577</li>
                    <li className='font-JostR400 text-[14px] text-[#001049] cursor-pointer mt-[20px]'>116 Archer Rd <br/>
                    Broadalbin, New York (NY),<br/>
                    12025</li>
                  </ul>
                </div>
                <div className='lg:hidden block'>
                  <Image src={LargeLogo} alt='Large Logo'/>
                </div>
              </div>
              
            </div>
              <div className='mt-8 mb-8 lg:block hidden'>
                <hr className='hr-line'/>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterSection