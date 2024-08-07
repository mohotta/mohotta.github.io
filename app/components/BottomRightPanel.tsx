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
                            disabled
                            variant={'secondary'}
                            aria-label='scroll-up'
                            size={'icon'}
                            onClick={() => setOpenChat(true)}
                            className='rounded-full'
                        >
                            <IoChatbubblesOutline/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                        Chat with SOLA
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