import React from 'react'
export default function Header() {
    return (
        <div className='wrapper mb-3'>
            <div className='header-main flex  p-2  border-2 w-11/12  m-auto  justify-center relative top-4'>

                <ul class="flex  flex-1  items-center">
                    <li class="mr-6">
                        <a class="text-black-500  hover:text-green-500" href="#">تسجيل الدخول</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-black-500 hover:text-green-500" href="#">اتصل بنا</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-black-500 hover:text-green-500" href="#">تبرعاتي</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-black-500 hover:text-green-500" href="#">الجمعيات الخيرية </a>
                    </li>
                    <li class="mr-6">
                        <a class="text-black-500 hover:text-green-500" href="#">عن معاً</a>
                    </li>
                    <li class="mr-6">
                        <a class="text-black-500 hover:text-green-500 " href="#">الرئيسية</a>
                    </li>
                </ul>
                <img
                    className='w-40  flex-4'
                    src="https://ma3an.000webhostapp.com/assets/images/ma3an1.svg" alt="logo" />


            </div>
        </div>

    )
}

