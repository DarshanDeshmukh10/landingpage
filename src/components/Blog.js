import React from 'react'
import img4 from '../images/img4.png'
import img3 from '../images/img3.png'
import img5 from '../images/img5.png'
const Blog = () => {
  return (
    <div className='w-full h-full bg-[#010208] px-24 py-24 flex flex-col justify-center text-[#FFFF] gap-1'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-2'>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB"/>
        </svg>
        <h2 className='font-[syne] font-bold text-4xl relative bottom-1'>Blog</h2>
        </div>
        <div className='font-[syne] font-medium text-base underline'>View all</div>
      </div>
      
      <div className='flex h-[214.5px] gap-8 mt-8 '>
        <div>
            <img src={img3} alt="image3" height={214.5} width={286} className=' rounded-3xl' />
        </div>
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col gap-4 py-4'>
                <p className='font-normal text-lg text-[--bgc-card]'>Nov 9, 2023</p>
                <h1 className='font-[syne] font-semibold text-4xl leading-10'>How UX works in web</h1>
                <div className='flex flex-row gap-2'>
                    <button className=' w-16 h-8 rounded-[100px] border py-2 px-6 flex justify-center items-center'>UI</button>
                    <button className=' w-16 h-8 rounded-[100px] border py-2 px-6 flex justify-center items-center'>UX</button>
                </div>
            </div>
            <div>
                <button className=' py-4 px-8 border rounded-[100px] text-black bg-white mt-8'>Read</button>
            </div>
        </div>
      </div>

      <div className='flex h-[214.5px] gap-8 '>
        <div>
            <img src={img4} alt="image3" height={214.5} width={286} className=' rounded-3xl' />
        </div>
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col gap-4 py-4'>
                <p className='font-normal text-lg text-[--bgc-card]'>Aug 18, 2023</p>
                <h1 className='font-[syne] font-semibold text-4xl leading-10'>Case study - Analysis Application.</h1>
                <div className='flex flex-row gap-2'>
                    <button className=' w-16 h-8 rounded-[100px] border py-2 px-10 flex justify-center items-center'>DESIGN</button>
                    <button className=' w-16 h-8 rounded-[100px] border py-2 px-10 flex justify-center items-center'>PRINT</button>
                </div>
            </div>
            <div>
                <button className=' py-4 px-8 border rounded-[100px] text-black bg-white mt-8'>Read</button>
            </div>
        </div>
      </div>

      <div className='flex h-[214.5px] gap-8 '>
        <div>
            <img src={img5} alt="image3" height={214.5} width={286} className=' rounded-3xl' />
        </div>
        <div className='flex flex-row justify-between w-full'>
            <div className='flex flex-col gap-4 py-4'>
                <p className='font-normal text-lg text-[--bgc-card]'>Feb 16, 2023</p>
                <h1 className='font-[syne] font-semibold text-4xl leading-10'>3 ways to develop your skill</h1>
                <div className='flex flex-row gap-2'>
                    <button className=' w-16 h-8 rounded-[100px] border py-2 px-10 flex justify-center items-center'>FIGMA</button>
                    <button className=' w-16 h-8 rounded-[100px] border py-2 px-10 flex justify-center items-center'>WEB</button>
                </div>
            </div>
            <div>
                <button className=' py-4 px-8 border rounded-[100px] text-black bg-white mt-8'>Read</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
