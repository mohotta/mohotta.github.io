'use client'

import ScrlBtn from '@/components/shared/ScrlBtn'
import Chat from '@/app/components/chat'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { IoChatbubblesOutline } from 'react-icons/io5'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

const BottomRightPanel = () => {

    const [openChat, setOpenChat] = useState(false)

    // TODO: implement chat

  return (
    <div className='relative z-10'>
        <div className="fixed flex flex-col justify-center items-end bottom-4 right-4 space-y-2">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant={'outline'}
                            aria-label='chat-with-ai'
                            size={'icon'}
                            disabled={true}
                            onClick={() => setOpenChat(true)}
                            className='w-12 h-12 rounded-full border-2 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 hover:scale-110 opacity-50'
                        >
                            <IoChatbubblesOutline className="w-5 h-5"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Chat with ATLAS
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <ScrlBtn/>
          </div>
          <Chat open={openChat} setOpen={setOpenChat}/>
    </div>
  )
}

export default BottomRightPanel