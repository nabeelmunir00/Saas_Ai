import { useNavigate } from "react-router-dom"
import { AiToolsData } from "../assets/assets"
import { useUser } from "@clerk/clerk-react"
const AiTools = () => {
    const navigate = useNavigate()
    const { user } = useUser
    return (
        <div className="px-4 sm:px-20 xl:px-32 my-24">
            <div className="text-center">
                <h2 className="font-semibold text-slate-700 text-[42px]">Powerful AI Tools</h2>
                <p className="mx-auto max-w-lg text-gray-500">Everything you need to create, enhance, and optimize your content with cutting-edge AI technology.</p>
            </div>
            <div className="flex flex-wrap mt-10 justify-center">
                {
                    AiToolsData.map((data, index) => (
                        <div key={index}
                            className="p-8 m-4 max-w-xs shadow-lg bg-[#FDFDFE] border border-gray-100
                        hover:-translate-y-1 duration-300 transition-all cursor-pointer"
                            onClick={() => user && navigate(data.path)}>
                            <data.Icon
                                className="w-12 h-12 p-3 text-white rounded-xl transition-all duration-300"
                                style={{ background: `linear-gradient(to bottom, ${data.bg.from}, ${data.bg.to})` }}
                            />
                            <h3 className="mt-6 mb-3 text-lg font-semibold">{data.title}</h3>
                            <p className="text-gray-400 text-sm max-w-[95%]">{data.description}</p>



                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default AiTools
