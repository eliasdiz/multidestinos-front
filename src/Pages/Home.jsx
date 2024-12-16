import { Input, Typography} from '@material-tailwind/react'
import React, { useState } from 'react'
import { PaperPlaneTilt, WhatsappLogo, X } from '@phosphor-icons/react'

export default function Home() {

    const [ openChatBot, setOpenChatBot ] = useState(false)

    const handleOpen = () => setOpenChatBot(!openChatBot)
    

    return (
        <div className='h-[100vh] flex flex-col justify-center items-center'>

            {
                openChatBot &&
                    <div className="min-h-[50%] w-[25%] flex flex-col items-center justify-between border border-gray-600 rounded-xl p-2">

                        <div
                            className="w-full  flex items-center justify-between border rounded-xl p-2 bg-green-500 text-white uppercase"
                        >
                            <Typography variant="h5">cucho bot</Typography>
                            <X 
                                size={25} 
                                weight='bold'
                                className='cursor-pointer'
                                onClick={handleOpen}
                            />
                        </div>

                        <div className="w-full h-full  ">
                            <textarea onScroll={false} className='w-full max-h-[100%] overflow-y-auto border rounded-xl p-2'>
                                
                            </textarea>
                        </div>

                        <div>
                            <div className='w-full flex items-center justify-between gap-1'>
                                <Input name='escribe algo' placeholder='escribe algo' />
                                <PaperPlaneTilt size={30} color='green' weight='duotone'/>
                            </div>
                        </div>
                    </div>
            }

            <WhatsappLogo 
                size={50}
                color='green'
                weight='fill'
                className='cursor-pointer'
                onClick={handleOpen}
            />
        </div>
    )
}
