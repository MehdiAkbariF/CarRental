import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

const NavBar = () => {
  return (
    <div className='flex items-center justify-between shadow-sm border-b-[1px] border-b-blue-200 px-4'>
      <Image src={'/logo.png'} alt='لوگو'
             width={90} height={50}/>

      <div className='hidden md:flex gap-5'>
        <h2 className='hover:bg-blue-600 p-3 rounded-full
                       hover:text-white cursor-pointer duration-150'>صفحه اصلی</h2>
        <h2 className='hover:bg-blue-600 p-3 rounded-full
                       hover:text-white cursor-pointer duration-150'>تماس با ما</h2>
        <h2 className='hover:bg-blue-600 p-3 rounded-full
                       hover:text-white cursor-pointer duration-150'>درباره ما</h2>
      </div>
      <UserButton/>
    </div>
  )
}

export default NavBar
