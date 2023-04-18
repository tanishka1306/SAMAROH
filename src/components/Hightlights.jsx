import React from 'react'

function Hightlights() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] '>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px] font-bold'>Company picnic</h2>
        <img src="./Images/picnic.jpg" alt=""
        className='w-[1300px] object-cover relative border-4 border-white shadow-lg' />
      </div>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px] font-bold'>Launch event</h2>
        <img src="./Images/launch.jpg" alt=""
         className='md:w-[1300px] object-cover relative border-4 border-white shadow-lg' />
      </div>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[20px] font-bold'>Press Event</h2>
        <img src="./Images/press.jpg" alt=""
         className='w-[1300px] object-cover relative border-4 border-white shadow-lg' />
      </div>
    </div>
  )
}

export default Hightlights
