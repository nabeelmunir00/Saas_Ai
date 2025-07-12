import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
    const [sidebar, setSidebar] = useState(false)
    const navigate = useNavigate()
    const { user } = useUser()
    return user ? (
        <div className='flex items-start justify-start h-screen flex-col'>
            <nav className='w-full min-h-14 flex items-center justify-between border-b border-gray-200 px-8'>
                <img onClick={() => navigate('/')} src={assets.logo} alt="logo" className='cursor-pointer w-32 sm:w-44' />
                {
                    sidebar ? <X onClick={() => setSidebar(false)} className='w-6 h-6 text-gray-600 sm:hidden cursor-pointer' />
                        : <Menu onClick={() => setSidebar(true)} className='w-6 h-6 text-gray-600 sm:hidden cursor-pointer' />
                }
            </nav>
            <div className='flex flex-1 w-full h-[calc(100vh-64px)]'>
                <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
                <div className='flex-1 bg-[#F4F7FB]'>
                    <Outlet />
                </div>
            </div>
        </div>
    ) :
        <div className='flex items-center justify-center h-screen'>
            <SignIn />
        </div>
}

export default Layout
