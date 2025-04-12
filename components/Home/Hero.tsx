import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
        <h2 className='text-[40px] md:text-[60px] font-bold'>
            اولین نمایشگاه آنلاین خودرو در ایران
        </h2>
        <h2 className='text-[20px] text-gray-500'>
            همین حالا خودروی خود را انتخاب کنید و با بهترین شرایط از ما دریافت کنید . *بدون پیش پرداخت و ضامن*
            </h2>
            <button className='p-3 mt-5 bg-blue-300 rounded-full cursor-pointer
                               hover:bg-blue-500 hover:scale-105 transition-all
                               '>جستجو خودرو</button>
      </div>
      <div>
        <Image src={'/HeroImg.jpg'}
                width={400}
                height={500}
                alt='Image'
                className='w-full h-full object-cover sm:mt-2 md:mt-0'/>
      </div>
    </div>
  )
}

export default Hero
