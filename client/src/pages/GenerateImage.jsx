import React, { useState } from 'react'
import { Image, Sparkles } from 'lucide-react'

const GenerateImage = () => {
    const ImageStyle = ['Realistic', 'Ghibli style', 'Anime style', 'Cartoon style', 'Fantasy style',
        'Realistic style', '3D style', 'Portrait style',
    ];
    const [selectedLength, setSelectedLength] = useState('Realistic')
    const [input, setInput] = useState('')
    const [publish, setPublish] = useState(false)
    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }
    return (
        <div className='h-full overflow-y-scroll p-6 flex items-start gap-8 flex-wrap text-[#1F1F1F]'>
            {/* left colume */}
            <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 border border-gray-200 bg-white rounded-lg' >
                <div className='flex items-center gap-3'>
                    <Sparkles className='w-6 text-[#00AD25]' />
                    <h1 className='text-xl font-semibold'>AI Image Generator</h1>
                </div>
                <p className='mt-6 text-sm font-medium'>Describe Your Image</p>
                <textarea rows={4} className='w-full p-2 px-4 mt-2 outline-none border border-gray-300 text-sm rounded-md'
                    type="text" placeholder='Describe what you want to see in the image..' required value={input} onChange={(e) => setInput(e.target.value)} />

                <p className='mt-6 text-sm font-medium'  > Article Length</p>
                <div className='flex items-center gap-2 flex-wrap mt-2'>
                    {ImageStyle.map((items, index) => (
                        <span onClick={() => setSelectedLength(items)} key={index} className={`text-xs px-4 py-2 border rounded-full cursor-pointer
                                ${selectedLength === items ? 'bg-green-50 text-green-700' : 'text-gray-500 border-gray-300'}`} >{items}</span>

                    ))}
                </div>
                <div className='my-6 flex items-center gap-2'>
                    <label className='relative cursor-pointer'>
                        <input type="checkbox" checked={publish} onChange={(e) => setPublish(e.target.checked)} className='sr-only peer' />
                        <div className='w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-green-500 transition'></div>
                        <span className='w-3 h-3 absolute top-1 left-1 bg-white rounded-full peer-checked:translate-x-4 transition'></span>
                    </label>
                    <p className='text-sm'>Make this image Public</p>
                </div>
                <br />
                <button type='submit' className='w-full flex items-center justify-center gap-2 mt-6 text-white px-4 py-2 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-[#00AD25] to-[#04FF50]'>
                    <Image className='w-5' />
                    Generate artical
                </button>

            </form>

            {/* right colume */}
            <div class="w-full max-w-lg sm:max-w-xl p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-[500px]">
                <div class="flex items-center gap-3">
                    <Image class="w-5 h-5 text-[#00AD25]" />
                    <h1 class="text-xl font-semibold">Generated Image</h1>
                </div>

                <div class="flex-1 flex justify-center items-center">
                    <div class="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <Image class="w-9 h-9" />
                        <p>Describe an image and click "Generate Image" to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateImage
