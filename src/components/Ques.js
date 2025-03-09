import React from 'react'

const Ques = () => {
  return (
    <div className='w-full h-full bg-[#010208] px-24 py-24 flex flex-col justify-center text-[#FFFF] gap-8'>
      <div className='flex flex-row gap-2'>
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0.5L17.8885 10.6877L25.4046 3.55573L20.9443 12.9078L31.2169 11.5557L22.1115 16.5L31.2169 21.4443L20.9443 20.0922L25.4046 29.4443L17.8885 22.3123L16 32.5L14.1115 22.3123L6.59544 29.4443L11.0557 20.0922L0.783095 21.4443L9.88854 16.5L0.783095 11.5557L11.0557 12.9078L6.59544 3.55573L14.1115 10.6877L16 0.5Z" fill="#CBCBCB"/>
       </svg>

        <h2 className='font-[syne] font-bold text-4xl relative bottom-1'>Frequently asked questions</h2>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-2'>
            <h2 className='font-[syne] font-medium text-3xl'>What is your design process?</h2>
            <p className=' font-normal text-lg text-[--bgc-card]'>My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.</p>
        </div>
        <h2 className='font-[syne] font-medium text-3xl'>What tools and software do you use for UX design?</h2>
        <h2 className='font-[syne] font-medium text-3xl'>How do you measure the success of your UX designs?</h2>
      </div>
    </div>
  )
}

export default Ques
