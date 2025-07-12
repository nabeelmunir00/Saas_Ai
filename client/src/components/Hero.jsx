import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from "motion/react"

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='px-4 sm:px-20 xl:px-32 inline-flex flex-col justify-center w-full min-h-screen bg-[url(/gradientBackground.png)] bg-no-repeat bg-cover'>
            {/* Text Content */}
            <div
                className='text-center mb-4'>
                <motion.h1
                    initial={{ y: 120, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "easeOut"
                    }}
                    className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-bold mx-auto leading-[1.2]'>
                    Create amazing content <br />
                    with <span className='text-primary'>AI tools</span>
                </motion.h1>
                <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>
                    Transform your content creation with our suite of premium AI tools. Write articles, generate images, and enhance your workflow.</motion.p>
            </div>
            {/* Buttons */}
            <motion.div
                initial={{ scale: 1.05, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.7,
                    delay: 1
                }}
                className='mt-5 flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs'>
                <button onClick={() => navigate('/ai')}
                    className='bg-primary px-10 text-white py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition cursor-pointer' >Start creating now
                </button>
                <button
                    className='bg-white px-10 py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition cursor-pointer' >
                    Watch demo
                </button>
            </motion.div>
            {/* small banner */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className='flex mx-auto items-center mt-8 text-gray-600 gap-4'>
                <img src={assets.user_group} className='h-8' alt="usergroup" />
                Trusted by 10k+ people
            </motion.div>
        </div>
    )
}

export default Hero
