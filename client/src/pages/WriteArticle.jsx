import React, { useState } from 'react'
import { Edit, Sparkles } from 'lucide-react'

const WriteArticle = () => {
    const articalLength = [
        { length: 800, text: 'Short (500-800 words)' },
        { length: 1200, text: 'Medium (800-1200 words)' },
        { length: 1600, text: 'Long (1200+ words)' },
    ]
    const [selectedLength, setSelectedLength] = useState(articalLength[0])
    const [input, setInput] = useState('')
    const onSubmitHandler = async (e) => {
        e.preventDefault()
    }
    return (
        <div className='h-full overflow-y-scroll p-6 flex items-start gap-8 flex-wrap text-[#1F1F1F]'>
            {/* left colume */}
            <form onSubmit={onSubmitHandler} className='w-full max-w-lg p-4 border border-gray-200 bg-white rounded-lg' >
                <div className='flex items-center gap-3'>
                    <Sparkles className='w-6 text-[#226BFF]' />
                    <h1 className='text-xl font-semibold'>AI Article Writer</h1>
                </div>
                <p className='mt-6 text-sm font-medium'>Article Topic</p>
                <input className='w-full p-2 px-4 mt-2 outline-none border border-gray-300 text-sm rounded-md'
                    type="text" placeholder='The future of artificial intelligence...' required value={input} onChange={(e) => setInput(e.target.value)} />

                <p className='mt-6 text-sm font-medium'  > Article Length</p>
                <div className='flex items-center gap-2 flex-wrap mt-2'>
                    {articalLength.map((items, index) => (
                        <span onClick={() => setSelectedLength(items)} key={index} className={`text-xs px-4 py-2 border rounded-full cursor-pointer
                        ${selectedLength.text === items.text ? 'bg-blue-50 text-blue-700' : 'text-gray-500 border-gray-300'}`} >{items.text}</span>

                    ))}
                </div>
                <br />
                <button type='submit' className='w-full flex items-center justify-center gap-2 mt-6 text-white px-4 py-2 rounded-lg text-sm cursor-pointer bg-gradient-to-r from-[#226BFF] to-[#65ADFF]'>
                    <Edit className='w-5' />
                    Generate artical
                </button>

            </form>

            {/* right colume */}
            <div class="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96 max-h-[600px]">
                <div class="flex items-center gap-3">
                    <Edit class="w-5 h-5 text-[#4A7AFF]" />
                    <h1 class="text-xl font-semibold">Generated article</h1>
                </div>

                <div class="flex-1 flex justify-center items-center">
                    <div class="text-sm flex flex-col items-center gap-5 text-gray-400">
                        <Edit class="w-9 h-9" />
                        <p>Enter a topic and click “Generate article” to get started</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WriteArticle
