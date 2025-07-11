import React from 'react'
import { dummyTestimonialData } from '../assets/assets'

const Testimonial = () => {
    return (
        <div className="px-4 sm:px-20 xl:px-32 my-24">
            <div className="text-center">
                <h2 className="font-semibold text-slate-700 text-[42px]">Loved by Creators</h2>
                <p className="mx-auto max-w-lg text-gray-500">Don't just take our word for it. Here's what our users are saying.</p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
                {
                    dummyTestimonialData.map((data, index) => (
                        <div key={index}
                            className="p-6 m-4 max-w-xs shadow-lg bg-[#FDFDFE] border border-gray-100
                            hover:-translate-y-1 duration-300 transition-all cursor-pointer">
                            <div className='flex'>
                                {data.rating.map((img, index) => (
                                    <img src={img} alt='img' />
                                ))}
                            </div>
                            <p className="text-gray-400 text-sm max-w-[95%] my-5">{`"${data.content}"`}</p>
                            <hr className="border-b border-gray-200 mb-5" />
                            <div className='flex items-center gap-4'>
                                <img src={data.image} className='w-12 h-12 rounded-full' alt="" />
                                <div className='text-sm text-gray-600'>
                                    <h3 className='font-medium'>{data.name}</h3>
                                    <p className='text-xs text-gray-500'>{data.title}</p>
                                </div>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Testimonial
