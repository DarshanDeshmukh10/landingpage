import React from 'react'
import img6 from '../images/img6.png'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
const Whatthey = () => {
  return (
    <div className='w-full h-full bg-[#010208] px-24 py-24 flex flex-col justify-center text-[#FFFF] gap-1'>
      <div className='flex flex-row font-[syne] font-bold text-4xl leading-[48px] gap-2'>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0.5L17.8885 10.6877L25.4046 3.55573L20.9443 12.9078L31.2169 11.5557L22.1115 16.5L31.2169 21.4443L20.9443 20.0922L25.4046 29.4443L17.8885 22.3123L16 32.5L14.1115 22.3123L6.59544 29.4443L11.0557 20.0922L0.783095 21.4443L9.88854 16.5L0.783095 11.5557L11.0557 12.9078L6.59544 3.55573L14.1115 10.6877L16 0.5Z" fill="#CBCBCB"/>
        </svg>
        <h2 className='relative bottom-2'>What they say</h2>
      </div>
      <div className='flex flex-row py-4 gap-8 justify-between mt-8'>
        <div className='flex flex-row gap-4 w-[700px]'>
            <img src={img6} alt="" width={64}  className=' rounded-full h-16' />
            <div className='flex flex-col'>
                <h3 className=' font-[syne] font-semibold text-2xl leading-8'>Floyd Miles</h3>
                <p className=' font-normal text-[18px] text-[--bgc-card]'>eBay</p>
            </div>
        </div>
        <div className='relative'>
            <div >
            <svg width="103" height="85" viewBox="0 0 103 85" className='absolute -top-10' fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.6465 84.8538L0.646477 84.8538L0.64648 43.7765C0.646482 25.4066 10.105 12.3095 29.0222 4.48523C32.7349 2.9544 36.978 1.50862 41.7515 0.14788L48.5139 13.9253C37.641 17.5823 31.0553 22.3024 28.757 28.0855C27.6962 30.6369 27.1658 33.6985 27.1658 37.2705L48.6465 37.2705L48.6465 84.8538Z" fill="#CBCBCB" fill-opacity="0.48"/>
            <path d="M102.293 84.8538L54.293 84.8538L54.293 43.7765C54.293 25.4066 63.7515 12.3095 82.6687 4.48523C86.3814 2.9544 90.6245 1.50862 95.3979 0.14788L102.16 13.9253C91.2874 17.5823 84.7018 22.3024 82.4035 28.0855C81.3427 30.6369 80.8123 33.6985 80.8123 37.2705L102.293 37.2705L102.293 84.8538Z" fill="#CBCBCB" fill-opacity="0.48"/>
            </svg>

            </div>
            <div>
                <p className=' font-[syne] font-medium text-3xl leading-10 w-[710px] '>Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers.</p>
            </div>
        </div>
      </div>

      <div className='flex flex-row justify-center mt-6 gap-5 z-0'>
        <div className='p-5 bg-white rounded-full'>
        <FaArrowLeftLong className='text-black'/>
        </div>
        <div className='p-5 bg-white rounded-full'>
        <FaArrowRightLong className='text-black bg-white rounded-full'/>
        </div>
        
      </div>
    </div>
  )
}

export default Whatthey
