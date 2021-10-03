import React from 'react'

export default function HeroImage() {
    return (
        <div className='wrapper'>
            <div className='hero-section flex mt-20'>
                <div className='slider  w-2/3'>
                    <img src="https://ma3an.000webhostapp.com/assets/images/slider/slider-1.png" alt="" />

                </div>
                <div className='into w-1/3  text-right pr-20 '>
                    <div className='text-5xl mb-5 	'>منصة معاً</div>
                    <div className='leading-loose'>ما قد يفيض عن حاجتك وما لم يعد ضروري لديك قد يكون حاجة ملحة او ضرورية لشخص اخر وترسم ابتسامة على وجه طفل بريء او انسان عاجز او غير مقتدر قد ترغب بمفجأة صديق أو قريب بهدية او ان تساعد شخص بمنحة دراسية او تامين فرصة عمل تجد ذلك في منصة "معا" </div>



                    <button className='w-20 h-10 bg-green-600'> تبرع الآن</button>
                </div>

            </div>
        </div>

    )
}
