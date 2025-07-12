import { Eraser, RemoveFormatting, Sparkles } from 'lucide-react'
import React, { useState } from 'react'

const RemoveBackground = () => {
    const [input, setInput] = useState('')
    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }
    return (
        <div className='h-full overflow-y-scroll p-6 flex items-start gap-8 flex-wrap text-[#1F1F1F]'>
            {/* left colume */}
            <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 border border-gray-200 bg-white rounded-lg' >
                <div className='flex items-center gap-3'>
                    <Sparkles className='w-6 text-[#FF4938]' />
                    <h1 className='text-xl font-semibold'>Background Removal</h1>
                </div>
                <p className='mt-6 text-sm font-medium'>Upload image</p>
                <input className='w-full p-2 px-4 mt-2 outline-none border border-gray-300 text-sm rounded-md'
                    type="file" accept='image/*' placeholder='The future of artificial intelligence...' required value={input} onChange={(e) => setInput(e.target.files[0])} />

                <p className='mt-5 text-gray-500 text-xs font-light'  > Supports JPG, PNG, and other image formats</p>
                <button type='submit' className='w-full flex items-center justify-center gap-2 mt-6 text-white px-4 py-2 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-[#F6AB41] to-[#FF4938]'>
                    <Eraser className='w-5' />
                    Remove background
                </button>

            </form>

            {/* right colume */}
            <div class="w-full max-w-lg sm:max-w-xl p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
                <div class="flex items-center gap-3">
                    <Eraser class="w-5 h-5 text-[#FF4938]" />
                    <h1 class="text-xl font-semibold">Processed Image</h1>
                </div>

                <div class="flex-1 flex justify-center items-center">
                    <div class="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <Eraser class="w-9 h-9" />
                        <p>Upload an image and click "Remove Background" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RemoveBackground
