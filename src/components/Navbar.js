import React from 'react'

const Navbar = () => {
  return (

    <div className='w-full h-[104px] bg-[#010208] items-center justify-between p-8 relative flex flex-row px-28'>
       
      <div className='flex flex-row h-10 relative'>
        <div className=' w-[9.48px] bg-[#FFFFFF] h-8'></div>
        <div className='h-[11.85px] w-[11.85px] rounded-full left-[10.67px] top-[1.19px] bg-[#FFFFFF]'></div>
        <div className='h-[32px] w-[9.48px] bg-[rgb(255,255,255)]'></div>
        <div className="h-[11.85px] w-[11.85px] rounded-full bg-[#FFFFFF] absolute left-[31.37px] bottom-2"></div>
      </div>
      <div className=''>
        <li className='flex flex-row '>  
            <ul className='bg-white gap-2 h-9 w-24 text-black rounded-3xl flex font-[syne] items-center justify-center'>Home</ul>
            <ul className='gap-2 h-9 w-24 rounded-3xl flex items-center justify-center text-white font-[syne]'>About</ul>
            <ul className='gap-2 h-9 w-24 rounded-3xl flex items-center justify-center text-white font-[syne]'>Projects</ul>
            <ul className='gap-2 h-9 w-24 rounded-3xl flex items-center justify-center text-white font-[syne]'>Contact</ul>
        </li>
      </div>
      <div className='text-white border border-white rounded-3xl py-2 px-6 -right-[100px]'>
        HIRE ME
      </div>
    </div>
  )
}

export default Navbar
