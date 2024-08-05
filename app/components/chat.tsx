'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { BiSend } from "react-icons/bi"
import { BsPersonStanding } from "react-icons/bs"
import { FiSend, FiX } from "react-icons/fi"
import { GoPerson } from "react-icons/go"
import { RiRobot3Line } from "react-icons/ri"


type chatProps = {
    open: boolean,
    setOpen: (open: boolean) => void
}


export default function Chat({ open, setOpen }: chatProps) {

    const messages: {message: string, side: 0 | 1 }[] = [
        {
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, doloremque.",
            side: 0
        },
        {
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis placeat eius tempora!",
            side: 1
        },
        {
            message: "Lorem ipsum dolor",
            side: 0
        },
        {
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, doloremque.",
            side: 1
        },
        {
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis placeat eius tempora!",
            side: 0
        },
        {
            message: "Lorem ipsum dolor",
            side: 1
        },
        {
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, doloremque.",
            side: 0
        },
        {
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis placeat eius tempora!",
            side: 1
        },
        {
            message: "Lorem ipsum dolor",
            side: 0
        },
        {
            message: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, doloremque.",
            side: 1
        },
        {
            message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus blanditiis placeat eius tempora!",
            side: 0
        },
        {
            message: "Lorem ipsum dolor",
            side: 1
        },
    ]

    const chatRef = useRef<HTMLDivElement>()

    const [ animation1, setAnimation1 ] = useState("animate-opacity-up")
    const [ animation2, setAnimation2 ] = useState("animate-chat-slide-left")
    const [ opacity, setOpacity ] = useState("opacity-0 hidden")
    const [ right, setRight ] = useState("-right-[1000px]")

    const onClickOutside = (e: Event) => {
        if (open && !chatRef.current?.contains(e.target as Node)) {
            setOpen(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside)
    })

    useEffect(() => {
        setAnimation1(open? "animate-opacity-up": "animate-opacity-down")
        setAnimation2(open? "animate-chat-slide-left": "animate-chat-slide-right")
        setTimeout(() => {
            setRight(open? "right-[16px]": "-right-[1000px]")
            setOpacity(open? "opacity-100": "opacity-0 hidden")
        }, 300)
    }, [open])

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [open])


    // TODO: adding chat functionality

    return (
        <div>
            <div className="relative z-20">
                <div className={`fixed flex flex-col items-end top-0 left-0 p-4 h-screen w-screen bg-step1/50 backdrop-blur-sm ${opacity} ${animation1}`}>
                    <div ref={chatRef} className={`fixed flex flex-col justify-center items-end w-5/6 min-w-[280px] sm:w-2/3 lg:w-[30%] h-full space-y-4 border opacity-100 bg-secondary/50 rounded-lg pb-4 ${right} ${animation2}`}>
                        <div className="flex flex-row justify-end items-center w-full h-[14px]">
                            <Button
                                size={'icon'}
                                variant={'ghost'}
                                onClick={() => setOpen(false)}
                                className="rounded-full"
                            >
                                <FiX/>
                            </Button>
                        </div>
                        <div className="flex flex-col justify-evenly w-full h-full max-h-[90%]">
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="font-bold text-xl"> SOLA - Personal Assistant </h1>
                                <p className="text-xs italic"> Ask anything you want to know about Kumudu </p>
                            </div>
                            <div className="m-4 h-full bg-secondary/70 space-y-4 p-4 overflow-y-scroll rounded-lg">
                                {
                                    messages.map((message) => (
                                        <div key={message.message} className={`flex flex-row w-full items-end space-x-2 ${message.side==0? 'justify-start': 'justify-end'}`}>
                                            { message.side==0 && <Button disabled size={'icon'} variant={'outline'} className="rounded-full"><RiRobot3Line/></Button> }
                                            <div className={`${message.side==0? 'bg-step1/50 self-start rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border-step5': 'bg-primary-foreground/50 self-end rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl'} p-3 max-w-[70%]`}>
                                                <p>
                                                    {message.message}
                                                </p>
                                            </div>
                                            { message.side==1 && <Button disabled size={'icon'} variant={'outline'} className="rounded-full"><GoPerson/></Button> }
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="flex flex-row justify-evenly items-center m-4">
                                <Input type={'search'} className="rounded-full bg-secondary px-6" placeholder={"ask me anything ..."}/>
                                <Button size={'sm'} variant={"secondary"} className="ml-4 rounded-full">
                                    <BiSend/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
