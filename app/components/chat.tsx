'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useEffect, useRef, useState } from "react"
import { BiSend } from "react-icons/bi"
import { BsPersonStanding } from "react-icons/bs"
import { FiSend, FiX, FiTrash2 } from "react-icons/fi"
import { GoPerson } from "react-icons/go"
import { RiRobot3Line } from "react-icons/ri"
import { HiSparkles } from "react-icons/hi2"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

type chatProps = {
    open: boolean,
    setOpen: (open: boolean) => void
}

interface Message {
    message: string;
    side: 0 | 1; // 0 for ATLAS, 1 for user
}


export default function Chat({ open, setOpen }: chatProps) {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const chatRef = useRef<HTMLDivElement | null>(null)
    const messagesEndRef = useRef<HTMLDivElement | null>(null)

    const sendMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        const userMessage: Message = {
            message: inputMessage,
            side: 1
        };

        setMessages(prev => [...prev, userMessage]);
        setInputMessage('');
        setIsLoading(true);

        // Add empty ATLAS message that will be streamed
        const atlasMessage: Message = {
            message: "",
            side: 0
        };
        setMessages(prev => [...prev, atlasMessage]);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [
                        ...messages.map(msg => ({
                            role: msg.side === 0 ? 'assistant' : 'user',
                            content: msg.message
                        })),
                        {
                            role: 'user',
                            content: inputMessage
                        }
                    ]
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();
            
            // Simulate streaming by typing out the response
            const fullMessage = data.message;
            let currentMessage = '';
            
            for (let i = 0; i < fullMessage.length; i++) {
                currentMessage += fullMessage[i];
                
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1] = {
                        message: currentMessage,
                        side: 0
                    };
                    return newMessages;
                });
                
                // Add delay between characters for typing effect
                await new Promise(resolve => setTimeout(resolve, 20));
            }
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage: Message = {
                message: "Sorry, I'm having trouble responding right now. Please try again.",
                side: 0
            };
            setMessages(prev => {
                const newMessages = [...prev];
                newMessages[newMessages.length - 1] = errorMessage;
                return newMessages;
            });
        } finally {
            setIsLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([]);
        if (isClient) {
            localStorage.setItem('atlas-chat-history', JSON.stringify([]));
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const [ animation1, setAnimation1 ] = useState("animate-opacity-up")
    const [ animation2, setAnimation2 ] = useState("animate-chat-slide-left")
    const [ opacity, setOpacity ] = useState("opacity-0 hidden")
    const [ right, setRight ] = useState("-right-[1000px]")


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

    useEffect(() => {
        setIsClient(true);
        // Load messages from localStorage on client side only
        const savedMessages = localStorage.getItem('atlas-chat-history');
        if (savedMessages) {
            setMessages(JSON.parse(savedMessages));
        }
    }, []);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        // Save to localStorage whenever messages change (client side only)
        if (isClient && messages.length > 0) {
            localStorage.setItem('atlas-chat-history', JSON.stringify(messages));
        }
    }, [messages, isClient]);


    // TODO: adding chat functionality

    return (
        <div>
            <div className="relative z-20">
                <div className={`fixed flex items-center justify-end top-0 left-0 h-screen w-screen bg-background/80 backdrop-blur-sm pr-4 ${opacity} ${animation1}`} onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        setOpen(false);
                    }
                }}>
                    <div ref={chatRef} className={`flex flex-col w-[90%] sm:w-[400px] lg:w-[420px] h-[85vh] max-h-[700px] bg-slate-50 dark:bg-card backdrop-blur-sm border-2 border-slate-200 dark:border-border/80 rounded-xl shadow-lg transition-all duration-500 ${
                        open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
                    } ${animation2}`}>
                        <div className="flex flex-row justify-between items-center p-6 pb-4 border-b border-slate-200 dark:border-border">
                            <div className="flex items-center gap-3">
                                <div className="text-primary text-lg">
                                    <HiSparkles className="w-5 h-5"/>
                                </div>
                                <div>
                                    <h1 className="font-semibold text-lg text-foreground">ATLAS</h1>
                                    <p className="text-xs text-muted-foreground">Personal Assistant</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    size={'icon'}
                                    variant={'ghost'}
                                    onClick={clearChat}
                                    className="w-8 h-8 rounded-full hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
                                    title="Clear chat"
                                >
                                    <FiTrash2 className="w-4 h-4"/>
                                </Button>
                                <Button
                                    size={'icon'}
                                    variant={'ghost'}
                                    onClick={() => setOpen(false)}
                                    className="w-8 h-8 rounded-full hover:bg-primary/10 transition-all duration-300"
                                >
                                    <FiX className="w-4 h-4"/>
                                </Button>
                            </div>
                        </div>
                        
                        <div className="flex flex-col h-full overflow-hidden">
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 [&::-webkit-scrollbar]:hidden" style={{
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            }}>
                                {messages.length === 0 ? (
                                    <div className="flex flex-col h-full">
                                        <div className="flex-1 flex items-end justify-center pb-8">
                                            <div className="text-center space-y-6 max-w-[320px]">
                                                <div className="space-y-3">
                                                    <div className="w-12 h-12 mx-auto rounded-xl bg-slate-100 dark:bg-muted/60 border-2 border-slate-300 dark:border-border shadow-sm flex items-center justify-center">
                                                        <HiSparkles className="w-6 h-6 text-slate-600 dark:text-foreground/80"/>
                                                    </div>
                                                    <h2 className="text-xl font-medium text-foreground">How can ATLAS help you today?</h2>
                                                </div>
                                                
                                                <div className="grid grid-cols-1 gap-2">
                                                    <div className="p-3 rounded-lg border-2 border-slate-200 dark:border-border bg-slate-100 dark:bg-muted/50 hover:bg-slate-150 dark:hover:bg-muted/70 hover:border-slate-300 dark:hover:border-border/90 transition-all cursor-pointer shadow-sm">
                                                        <div className="text-left">
                                                            <h3 className="text-sm font-medium text-slate-800 dark:text-foreground mb-1">Ask about Kumudu</h3>
                                                            <p className="text-xs text-slate-600 dark:text-muted-foreground/90">Learn about experience and projects</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="p-3 rounded-lg border-2 border-slate-200 dark:border-border bg-slate-100 dark:bg-muted/50 hover:bg-slate-150 dark:hover:bg-muted/70 hover:border-slate-300 dark:hover:border-border/90 transition-all cursor-pointer shadow-sm">
                                                        <div className="text-left">
                                                            <h3 className="text-sm font-medium text-slate-800 dark:text-foreground mb-1">Get assistance</h3>
                                                            <p className="text-xs text-slate-600 dark:text-muted-foreground/90">Help with general inquiries</p>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="p-3 rounded-lg border-2 border-slate-200 dark:border-border bg-slate-100 dark:bg-muted/50 hover:bg-slate-150 dark:hover:bg-muted/70 hover:border-slate-300 dark:hover:border-border/90 transition-all cursor-pointer shadow-sm">
                                                        <div className="text-left">
                                                            <h3 className="text-sm font-medium text-slate-800 dark:text-foreground mb-1">Start a conversation</h3>
                                                            <p className="text-xs text-slate-600 dark:text-muted-foreground/90">Ask anything you'd like to know</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    messages.filter(message => message.message.trim() !== '').map((message, index) => (
                                        <div key={index} className={`flex w-full ${message.side==0? 'justify-start': 'justify-end'}`}>
                                            <div className={`max-w-[80%] p-3 rounded-lg transition-all duration-300 shadow-sm ${
                                                message.side==0 
                                                    ? 'bg-slate-100 dark:bg-muted/40 border-2 border-slate-200 dark:border-border/60 hover:bg-slate-150 dark:hover:bg-muted/50' 
                                                    : 'bg-slate-200 dark:bg-card border-2 border-slate-300 dark:border-border/80 hover:bg-slate-250 dark:hover:bg-card/90'
                                            }`}>
                                                <div className="text-xs sm:text-sm text-slate-700 dark:text-foreground/90 leading-relaxed prose prose-xs sm:prose-sm dark:prose-invert prose-slate max-w-none">
                                                    <ReactMarkdown 
                                                        remarkPlugins={[remarkGfm]}
                                                        components={{
                                                            p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                                                            code: ({ children, className }) => {
                                                                const isInline = !className;
                                                                return isInline ? (
                                                                    <code className="bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 rounded text-xs font-mono">
                                                                        {children}
                                                                    </code>
                                                                ) : (
                                                                    <code className="block bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-xs font-mono overflow-x-auto">
                                                                        {children}
                                                                    </code>
                                                                );
                                                            },
                                                            pre: ({ children }) => <div className="my-2">{children}</div>,
                                                            ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                                                            ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                                                            li: ({ children }) => <li className="text-xs sm:text-sm">{children}</li>,
                                                            h1: ({ children }) => <h1 className="text-sm sm:text-base font-bold mb-2">{children}</h1>,
                                                            h2: ({ children }) => <h2 className="text-sm font-semibold mb-2">{children}</h2>,
                                                            h3: ({ children }) => <h3 className="text-xs sm:text-sm font-semibold mb-1">{children}</h3>,
                                                            blockquote: ({ children }) => (
                                                                <blockquote className="border-l-2 border-slate-300 dark:border-slate-600 pl-3 italic my-2">
                                                                    {children}
                                                                </blockquote>
                                                            ),
                                                            strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                                                            em: ({ children }) => <em className="italic">{children}</em>,
                                                        }}
                                                    >
                                                        {message.message}
                                                    </ReactMarkdown>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                                {messages.length > 0 && messages[messages.length - 1].side === 0 && messages[messages.length - 1].message === '' && (
                                    <div className="flex justify-start">
                                        <div className="max-w-[80%] p-3 rounded-lg bg-slate-100 dark:bg-muted/40 border-2 border-slate-200 dark:border-border/60 shadow-sm">
                                            <div className="flex space-x-1">
                                                <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-foreground/60 rounded-full animate-pulse"></div>
                                                <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-foreground/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                                <div className="w-1.5 h-1.5 bg-slate-400 dark:bg-foreground/60 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                            
                            <div className="p-4 pt-2 border-t-2 border-slate-200 dark:border-border">
                                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-100 dark:bg-muted/40 border-2 border-slate-200 dark:border-border hover:bg-slate-150 dark:hover:bg-muted/50 hover:border-slate-300 dark:hover:border-border/90 transition-all duration-300 shadow-sm">
                                    <Input 
                                        type={'text'} 
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        disabled={isLoading}
                                        className="flex-1 bg-transparent border-0 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0" 
                                        placeholder={"Ask me anything about Kumudu..."}
                                    />
                                    <Button 
                                        variant={'ghost'} 
                                        size={'icon'}
                                        onClick={sendMessage}
                                        disabled={!inputMessage.trim() || isLoading}
                                        className="w-8 h-8 rounded-full hover:bg-primary/10 transition-all duration-300"
                                    >
                                        <BiSend className="w-4 h-4"/>
                                    </Button>
                                </div>
                                <div className="flex justify-center mt-2">
                                    <p className="text-xs text-muted-foreground/60">
                                        Powered by Google Gemma
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
