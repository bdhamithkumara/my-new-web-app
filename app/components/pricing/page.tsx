"use client"
import React, { useState , useEffect , useRef} from 'react'
import Green from '../../../public/images/pricing/green.svg'
import Red from '../../../public/images/pricing/red.svg'
import Image from 'next/image'
import type { EventObject } from 'react-alice-carousel'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const PricingSection = () => {

    const [isChecked, setIschecked] = useState(false)

    const handleCheckBoxChange = () => {
        setIschecked(!isChecked)
    }

    interface DetailCard {
        id : string;
        mainTitle : string;
        mainParagraph : string;
        price : string;
        month : string;
        packageDetails : {image:string; data:string; altTag : string}[];
    }

    const DetailCard = [
        {
            id : "1",
            mainTitle : "Start",
            mainParagraph : "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            price : "50$",
            month : "month",
            packageDetails : [
                {data : "Videos Of Lession" , image :Green , altTag : "Green symbol"},
                {data : "Homework check" , image :Green , altTag : "Green symbol"},
                {data : "Additional Practical Tasks" , image :Red , altTag : "Red symbol" },
                {data : "Monthly conferences" , image :Red , altTag : "Red symbol"},
                {data : "Personal advice from teachers" , image :Red , altTag : "Red symbol"},
            ]
        }, {
            id: "2",
            mainTitle: "Advance",
            mainParagraph: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            price: "75$",
            month: "month",
            packageDetails: [
              { data: "Videos Of Lession", image: Green , altTag : "Green symbol"},
              { data: "Homework check", image: Green , altTag : "Green symbol"},
              { data: "Additional Practical Tasks", image: Green , altTag : "Green symbol"},
              { data: "Monthly conferences", image: Green , altTag : "Green symbol"},
              { data: "Personal advice from teachers", image: Red , altTag : "Red symbol" }
            ],
          },
          {
            id: "3",
            mainTitle: "Premium",
            mainParagraph: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
            price: "100$",
            month: "month",
            packageDetails: [
              { data: "Videos Of Lession", image: Green , altTag : "Green symbol"},
              { data: "Homework check", image: Green , altTag : "Green symbol"},
              { data: "Additional Practical Tasks", image: Green , altTag : "Green symbol"},
              { data: "Monthly conferences", image: Green , altTag : "Green symbol"},
              { data: "Personal advice from teachers", image: Green , altTag : "Green symbol"}
            ],
          },
    ]


    const [activeIndex, setActiveIndex] = useState(0)

    const [items, setItems] = useState<JSX.Element[]>([])

    useEffect(()=> {
        const mappedItems = DetailCard.map((item,id) => (
            <div key={id} data-value={id + 1} className={`mx-auto xl:w-[340px] lg:w-[290px] w-[320px] ${id === 1 ? 'lg:mt-[106px]' : 'lg:mt-[146px]'} mt-[146px] bg-[#fafafa] rounded-[40px] box-shadow-card mb-10`}>
                <div className="flex justify-center flex-col mx-auto items-center text-center">
                    <div className="mt-[40px]">
                        <span className='font-JostB700 text-[32px] text-[#001049]'>{item.mainTitle}</span>
                        <p className='font-JostM500 text-[16px] text-[2A3354] mt-[20px] w-[262px]'>{item.mainParagraph}</p>
                    </div>
                    <div className="flex mt-[30px]">
                        <h1 className='text-[#5685FF] font-JostB700 text-[80px]'>{item.price}</h1>
                        <span className='text-[#2A3354] text-[16px] font-JostR400 mt-[20px] ml-5'>/{item.month}</span>
                    </div>
                    <div className="mt-[40px]">
                        <ul>
                            {item.packageDetails.map((data,i)=>(
                                <li key={i} className='text-[#2A3354] text-[16px] font-JostM500 flex mb-[18px]'>
                                    <Image src={data.image} alt={data.altTag} className='mr-[10px]'/>
                                    {data.data}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-[52px] mb-[40px]'>
                        <button className='w-auto h-auto rounded-[10px] border-[1px] border-[#003FE6] font-JostM500 taext-base text-[#003FE6] py-4 lg:px-10 px-12'>
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        ))

        setItems(mappedItems);
    },[])

    const responsive = {
        0 : {items : 1},
        768 : {items : 1},
        1024 : {items : 3},
    }

    const carousel = useRef<AliceCarousel>(null);

    const syncActiveIndexForSwipeGestures = (e : EventObject) => setActiveIndex(e.item);

    const onSlideChnaged = (e : EventObject) =>{
        syncActiveIndexForSwipeGestures(e)
    }

    return (
        <section className='lg:mt-[100px] xxl:mx-20 lg:mx-18 mx-auto mb-10'>
            <div className="flex justify-center">
                <div className="xxl:w-[1260px] xl:w-[1180px] lg:w-[945px] md:w-[500px] w-[340px] h-auto">
                    <div className="text-center relative z-40">
                        <h2 className='text-[#001049] font-JostM500 lg:text-[48px] md:text-[38px] text-[28px]'>Here are all our plans</h2>
                        <div className='flex justify-center'>
                            <p className='mt-[24px] text-[#2A3354] font-JostR400 text-[16px] w-[473px] text-center'>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <div className="mt-[52px]">
                            <span className="text-[#001049] font-JostM500 text-[16px] mr-[32px]">Monthly</span>
                            <label className='toggle'>
                                <input className='toggle-checkbox' type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} />
                                <div className='toggle-switch'></div>
                            </label>
                            <span className="text-[#001049] font-JostM500 text-[16px] ml-[32px]">Yearly</span>
                        </div>
                    </div>
                    <div className="lg:mt-0 mt-[-75px]">
                        <AliceCarousel 
                            mouseTracking
                            disableDotsControls
                            disableButtonsControls
                            items={items}
                            activeIndex={activeIndex}
                            responsive={responsive}
                            ref={carousel}
                            onSlideChange={onSlideChnaged}
                        />
                    </div>
                    <div className='lg:hidden flex items-center justify-center'>
                        <button onClick={(e)=> carousel?.current?.slideNext(e)}>
                            <div>
                                <svg width="86" height="16" viewBox="0 0 86 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M85.7071 8.70711C86.0976 8.31658 86.0976 7.68342 85.7071 7.29289L79.3431 0.928932C78.9526 0.538408 78.3195 0.538408 77.9289 0.928932C77.5384 1.31946 77.5384 1.95262 77.9289 2.34315L83.5858 8L77.9289 13.6569C77.5384 14.0474 77.5384 14.6805 77.9289 15.0711C78.3195 15.4616 78.9526 15.4616 79.3431 15.0711L85.7071 8.70711ZM0 9H85V7H0V9Z" fill="#5685FF" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PricingSection