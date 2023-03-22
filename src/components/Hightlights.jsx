import React from 'react'

function Hightlights() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px] '>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[15px] font-bold'>DINNING HALL 2</h2>
        <img src="./Images/h1.png" alt=""
        className='w-[1300px] object-cover relative border-4 border-white shadow-lg' />
      </div>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[15px] font-bold'>DINNING HALL 2</h2>
        <img src="./Images/h2.png" alt=""
         className='w-[1300px] object-cover relative border-4 border-white shadow-lg' />
      </div>
      <div className='relative p-4'>
        <h2 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[15px] font-bold'>DINNING HALL 3</h2>
        <img src="./Images/h3.png" alt=""
         className='w-[1300px] object-cover relative border-4 border-white shadow-lg' />
      </div>
    </div>
  )
}

export default Hightlights
