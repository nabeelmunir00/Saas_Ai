import React, { useEffect, useState } from 'react'
import { dummyPublishedCreationData } from '../assets/assets'
import { useUser } from '@clerk/clerk-react'
import { Heart } from 'lucide-react'

const Community = () => {
    const [creations, setCreations] = useState([])
    const { user } = useUser()
    const fetchCreations = async () => {
        setCreations(dummyPublishedCreationData)
    }

    useEffect(() => {
        if (user) {
            fetchCreations()
        }
    }, [])
    return (
        <div className='flex h-full flex-col gap-4 p-6'>
            Creations
            <div className='w-full h-full rounded-xl overflow-y-scroll'>
                {creations.map((item, index) => (
                    <div key={index} className='relative group inline-block pl-3 pt-3 w-full sm:max-w-1/2 lg:max-w-1/3'>
                        <img src={item.content} alt="image" className='w-full h-full object-cover rounded-lg' />

                        <div className='top-0 left-3 bottom-0 right-0 absolute group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg flex items-end justify-end gap-2 p-3 group-hover:justify-between'>
                            <p className='text-sm hidden group-hover:block'>{item.prompt}</p>
                            <div className='flex items-center gap-1'>
                                <p>{item.likes.length}</p>
                                <Heart className={`min-w-5 h-5 hover:scale-105 cursor-pointer ${item.likes.includes(user.id) ? 'fill-red-500 text-red-600' : 'text-white'}`} />
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Community
