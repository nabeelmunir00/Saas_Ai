import React from 'react'
import { PricingTable } from '@clerk/clerk-react'

const ChoosePlan = () => {
    return (
        <div className='max-w-2xl mx-auto z-20 my-30'>
            <div className="text-center">
                <h2 className="font-semibold text-slate-700 text-[42px]">Choose Your Plan</h2>
                <p className="mx-auto max-w-lg text-gray-500">Start for free and scale up as you grow. Find the perfect plan for your content creation needs.</p>
            </div>
            <div className='mt-10 max-sm:mx-8'>
                <PricingTable />

            </div>

        </div>
    )
}

export default ChoosePlan
