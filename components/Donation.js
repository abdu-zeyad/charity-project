import React from 'react'
import { Tab } from '@headlessui/react'

export default function Donation() {
    return (
        <div className='bg-white '>
            <div className='wrapper w-5/6 m-auto'>
                <div className='donation-search flex  justify-between  h-24 items-center p-5'>
                    <div className='title'>
                        التبرعات العينية
                    </div>
                    <div className=' search' > بالقرب من موقعي</div>
                </div>

                <div className='options flex mb-10  h-20 items-center  justify-around bg-green-100'>
                    <p className='bg-white  w-44  text-center  p-2 h-10 rounded-lg'> أجهزة ومعدات طبية </p>
                    <p className='bg-white  w-44  text-center  p-2 h-10 rounded-lg'> اجهزة الكترونية </p>
                    <p className='bg-white  w-44  text-center  p-2 h-10 rounded-lg'> موبايل </p>
                    <p className='bg-white  w-44  text-center  p-2 h-10 rounded-lg'> اشجار ونباتات </p>
                    <p className='bg-white  w-44  text-center  p-2 h-10 rounded-lg'>  طعام و مأكولات </p>

                </div>


                <div className='cards flex flex-wrap  items-start  '>
                    <div className='card  w-1/3  p-4 '>
                        <div className='border-2  border-gray-100  items-center p-5  rounded-xl'>
                            <img src="https://ma3an.000webhostapp.com/assets/images/courses/courses-01.jpg" width="100%" className=' h-44' alt="" />
                            <p className=' leading-normal hover:text-green-300 mt-5 text-right'>يعطي النص كاذبة أيضا ليست نظرة واقعية للالرمادي المطبعية، وخاصة في حالة النص يبرره.
                            </p>
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p>عمان/ خلدا</p>
                                <p>4 ساعات</p>

                            </div>
                            <div className='flex justify-between items-center '>
                                <div className='connect'>
                                    <button>تواصل</button>
                                </div>
                                <div className='profile flex items-center justify-center'>
                                    <p>جمعية خيرية</p>

                                    <img src="https://ma3an.000webhostapp.com/assets/images/man.svg" alt="profile" width='50px' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='card  w-1/3  p-4'>
                        <div className='border-2  border-gray-100  items-center p-5  rounded-xl'>
                            <img src="https://ma3an.000webhostapp.com/assets/images/courses/item5.jpg" width="100%" className=' h-44' alt="" />
                            <p className=' leading-normal hover:text-green-300 mt-5 text-right'>يعطي النص كاذبة أيضا ليست نظرة واقعية للالرمادي المطبعية، وخاصة في حالة النص يبرره.
                            </p>
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p>عمان/ خلدا</p>
                                <p>4 ساعات</p>

                            </div>
                            <div className='flex justify-between items-center '>
                                <div className='connect'>
                                    <button>تواصل</button>
                                </div>
                                <div className='profile flex items-center justify-center'>
                                    <p>جمعية خيرية</p>

                                    <img src="https://ma3an.000webhostapp.com/assets/images/man.svg" alt="profile" width='50px' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='card  w-1/3  p-4'>
                        <div className='border-2  border-gray-100  items-center p-5  rounded-xl'>
                            <img src="https://ma3an.000webhostapp.com/assets/images/courses/item3.jpg" width="100%" className=' h-44' alt="" />
                            <p className=' leading-normal hover:text-green-300 mt-5 text-right'>يعطي النص كاذبة أيضا ليست نظرة واقعية للالرمادي المطبعية، وخاصة في حالة النص يبرره.
                            </p>
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p>عمان/ خلدا</p>
                                <p>4 ساعات</p>

                            </div>
                            <div className='flex justify-between items-center '>
                                <div className='connect'>
                                    <button>تواصل</button>
                                </div>
                                <div className='profile flex items-center justify-center'>
                                    <p>جمعية خيرية</p>

                                    <img src="https://ma3an.000webhostapp.com/assets/images/man.svg" alt="profile" width='50px' />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='card  w-1/3  p-4'>
                        <div className='border-2  border-gray-100  items-center p-5  rounded-xl'>
                            <img src="https://ma3an.000webhostapp.com/assets/images/courses/item1.jpg" width="100%" className=' h-44' alt="" />
                            <p className=' leading-normal hover:text-green-300 mt-5 text-right'>يعطي النص كاذبة أيضا ليست نظرة واقعية للالرمادي المطبعية، وخاصة في حالة النص يبرره.
                            </p>
                            <div className='flex justify-between items-center mt-4 mb-4'>
                                <p>عمان/ خلدا</p>
                                <p>4 ساعات</p>

                            </div>
                            <div className='flex justify-between items-center '>
                                <div className='connect'>
                                    <button>تواصل</button>
                                </div>
                                <div className='profile flex items-center justify-center'>
                                    <p>جمعية خيرية</p>

                                    <img src="https://ma3an.000webhostapp.com/assets/images/man.svg" alt="profile" width='50px' />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
