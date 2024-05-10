import React from 'react'

export default function Portcomp(props) {
  return (
    <div className='m-3'>
      <div className='border-[2px] rounded-xl p-1 hover:scale-110 duration-200 shadow-lg'>
        <p className='pl-10'><img src={props.img} alt=""  className='w-[120px] h-[120px] rounded-xl border-[2px]'/></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          
        </p>
        <div className='space-x-2 w-[92%] m-auto'>
          <button className='bg-[green] w-[30%] rounded-xl p-1 mt-5 mb-5'>
            {props.title}

          </button>
          <button className='bg-[red] rounded-xl p-1 mt-5 mb-5'>
source code
          </button>
        </div>
      </div>
    </div>
  )
}
