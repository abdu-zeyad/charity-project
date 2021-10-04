import React from 'react'

export default function Footer() {
    return (
        <div className='wrapper'>
            <div className='upper-part bg-green-100 h-80 relative '>
                <div className=' absolute top-10  right-10'>
                    <img src="https://ma3an.000webhostapp.com/assets/images/ma3an1.svg" alt="" className='' />
                    <p className='mb-5 mt-5'>
                        address@gmail.com</p>
                    <p>
                        (079) 262-1413</p>
                </div>

            </div>
            <div className='lower-part  flex justify-between bg-gray-900  h-16  items-center p-10'>
                <div className='text-green-100  text-sm font-mono'>
                    2021 © منصة معاً محفوظ لدى شركة الاعمال البارعة
                </div>
                <div className=''>
                    <ul className='flex gap-3 text-white'>
                        <li>  سياسات التبرع</li>
                        <li>سياسة خاصة</li>
                        <li>خريطة الموقع</li>
                        <li>حماية</li>


                    </ul>
                </div>

            </div>
        </div>
    )
}
