import React from 'react'

export default function ContactMe() {
  return (
    <>
     <div name="contact" className="mx-16 my-4 space-y-10">
     <h1  className="md:text-3xl text-2xl underline">Contact</h1>
     <p className='text-2xl'>Please fill out the form below to contact me</p>
     <div className='flex items-center justify-center '> 
      <form action="https://getform.io/f/paygmjga" method="POST" className='bg-slate-200 w-96 px-8 py-6 rounded-xl space-y-4'>
        <h1 className='font-bold text-2xl'>send your message to me </h1>
        <div>
          <label  className='text-xl text-[black] ' >enter your name -:</label>

          <input type="text 	"  name="name" className='border-black rounded-xl block w-full pl-2 p-1' placeholder='Enter name'/>
        </div>
        <div>
          <label className='text-xl text-[black] ' >enter your e-mail-:</label>

          <input type="text 	" name="email" className='border-black rounded-xl block w-full pl-2 p-1' placeholder='Enter email' />
        </div>
        <div>
          <label className='text-xl text-[black] ' >enter your message -:</label>

          <textarea  type="text 	" name="message" className=' shadow-lg border-black rounded-xl block  w-full h-[160px] pl-2 p-1' placeholder='Enter message' />
        </div>
        <button type="submit" className='w-[30%] rounded-xl bg-[green] p-2'>send</button>
      </form>
     </div>
     </div>
    </>
  )
}
