import React, { useState } from 'react'
import { PaperPlaneTilt, WhatsappLogo, X } from '@phosphor-icons/react'
import { Input, Typography} from '@material-tailwind/react'
import axios from 'axios'


export default function SeccionHome() {

    const [ openChatBot, setOpenChatBot ] = useState(false)
    const [ messages, setMessages ] = useState('')
    const [ response, setResponse ] = useState('')
    const url = 'http://localhost:8000/chatbot'

    const handleOpen = () => setOpenChatBot(!openChatBot)

    const handleSendMessage = async() => {
        if(messages === '') {
            alert('debes copiar un mensaje')
        }else{
            try {
                let data = {
                    message: messages
                }
                // console.log(data)
                let res = await axios.post(url,data)
                setResponse(res.data.reply)
                setMessages('')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <div>
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
                                <textarea 
                                    className='w-full  overflow-y-auto border rounded-xl p-2'
                                    value={response}
                                    readOnly
                                />
                            
                            </div>

                            <div>
                                <div className='w-full flex items-center justify-between gap-1'>
                                    <input
                                        className='border rounded-lg p-2'
                                        placeholder='Habla con CuchoBot' 
                                        onChange={(e) => setMessages(e.target.value)}
                                    />

                                    <PaperPlaneTilt 
                                        className='cursor-pointer'
                                        size={30} 
                                        color='green' 
                                        weight='duotone'
                                        onClick={handleSendMessage}
                                    />
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
        </div>
    )
}
