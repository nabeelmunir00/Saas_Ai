import React, { useEffect, useState } from 'react'
import { dummyCreationData } from '../assets/assets'
import { CurlyBraces, Gem, Sparkle } from 'lucide-react'
import { Protect } from '@clerk/clerk-react'
import CreationItem from '../components/CreationItem'

const Dashboard = () => {
    const [creatoins, setCreations] = useState([])

    const getDashboardData = async () => {
        setCreations(dummyCreationData)
    }

    useEffect(() => {
        getDashboardData()
    }, [])
    return (
        <div className='h-full overflow-y-scroll p-6'>
            <div className='flex justify-start gap-4 flex-wrap'>
                {/* Total Creations card */}
                <div className='flex items-center justify-between  w-72 p-6 px-8 border border-gray-200 '>
                    <div className='text-slate-600'>
                        <p className='text-sm'>Total Creations</p>
                        <h3 className='text-xl text-slate-800 font-semibold'>{creatoins.length}</h3>
                    </div>
                    <div className=' w-10 h-10 flex items-center justify-center text-white bg-gradient-to-br  rounded-lg from-[#3588F2] to-[#0BB0D7]'>
                        <Sparkle className='w-5 text-white  ' />
                    </div>
                </div>

                {/* Plan Status */}
                <div className='flex items-center justify-between  w-72 p-6 px-8 border border-gray-200 '>
                    <div className='text-slate-600'>
                        <p className='text-sm'>Plan Status</p>
                        <h3 className='text-xl text-slate-800 font-semibold'>
                            <Protect plan='premium' fallback="Free">Premium</Protect>
                        </h3>
                    </div>
                    <div className=' w-10 h-10 flex items-center justify-center text-white bg-gradient-to-br  rounded-lg from-[#FF61C5] to-[#9E53EE]'>
                        <Gem className='w-5 text-white  ' />
                    </div>
                </div>

            </div>
            <div className='space-y-3'>
                <p className='mt-6 mb-3'>Recent Creations</p>
                {creatoins.map((item) => <CreationItem item={item} />)}

            </div>
        </div>
    )
}

export default Dashboard
