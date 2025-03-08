import React from 'react'

const Experience = () => {
  return (
    <div className='w-full h-full bg-[#010208] px-24 py-24 flex flex-col justify-center text-[#FFFF]'>
        <div className=' h-12 gap-3 flex flex-row'>
        <svg width="32" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0L17.8885 10.1877L25.4046 3.05573L20.9443 12.4078L31.2169 11.0557L22.1115 16L31.2169 20.9443L20.9443 19.5922L25.4046 28.9443L17.8885 21.8123L16 32L14.1115 21.8123L6.59544 28.9443L11.0557 19.5922L0.783095 20.9443L9.88854 16L0.783095 11.0557L11.0557 12.4078L6.59544 3.05573L14.1115 10.1877L16 0Z" fill="#CBCBCB"/>
        </svg>
        <h2 className=' font-[syne] font-bold text-4xl'>Experience</h2>
        </div>
        <div className='w-full h-20 border-b-2 border-[--bgc-card] flex justify-between py-5 mt-2'>
            <div>
                <h2 className=' leading-10 text-2xl font-medium font-[syne] text-white'>Lead Product Designer</h2>
            </div>
            <div>
                <h2 className=' leading-8 font-[syne] font-semibold text-xl text-right'>FortKnox</h2>
                <p className=' font-normal text-base '>Mar 2022 - Oct 2023</p>
            </div>
        </div>
        <div className='w-full h-20 border-b-2 border-[--bgc-card] flex justify-between py-5 mt-2'>
            <div>
                <h2 className=' leading-10 text-2xl font-medium font-[syne] text-white'>Intern Designer</h2>
            </div>
            <div>
                <h2 className=' leading-8 font-[syne] font-semibold text-xl text-right'>OmniSafe</h2>
                <p className=' font-normal text-base '>Mar 2022 - Oct 2023</p>
            </div>
        </div>
        <div className='w-full h-20 border-b-2 border-[--bgc-card] flex justify-between py-5 mt-2'>
            <div>
                <h2 className=' leading-10 text-2xl font-medium font-[syne] text-white'>UI Designer</h2>
            </div>
            <div>
                <h2 className=' leading-8 font-[syne] font-semibold text-xl text-right'>Doradesign</h2>
                <p className=' font-normal text-base '>Mar 2022 - Oct 2023</p>
            </div>
        </div>
        <div className='w-full h-20 border-b-2 border-[--bgc-card] flex justify-between py-5 mt-2'>
            <div>
                <h2 className=' leading-10 text-2xl font-medium font-[syne] text-white'>Frontend Developer</h2>
            </div>
            <div>
                <h2 className=' leading-8 font-[syne] font-semibold text-xl text-right'>OpacityAuthor</h2>
                <p className=' font-normal text-base '>Mar 2022 - Oct 2023</p>
            </div>
        </div>
    </div>
  )
}

export default Experience
