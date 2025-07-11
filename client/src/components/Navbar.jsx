import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useUser, useClerk, UserButton } from '@clerk/clerk-react'
const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useUser()
    const { openSignIn } = useClerk()
    return (
        <div
            className='z-5 fixed backdrop-blur-2xl w-full flex-between py-3 px-4 sm:px-20 md:px-32'>
            <img onClick={() => navigate('/')}
                src={assets.logo} alt="logo" className='w-32 cursor-pointer sm:w-44' />

            {
                user ? <UserButton /> : (
                    <button onClick={openSignIn} className='flex items-center text-sm gap-2 bg-primary px-10 cursor-pointer text-white py-2.5 rounded-full'>
                        Get started <ArrowRight className='w-4 h-4' />
                    </button>

                )
            }

        </div>
    )
}

export default Navbar
