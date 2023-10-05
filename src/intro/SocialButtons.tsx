import { Stack, Tooltip, IconButton, useClipboard } from "@chakra-ui/react";
import { BsGithub, BsMedium } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiDocumentText } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { TfiLinkedin } from "react-icons/tfi";


interface Props {
    backgroundVisible?: boolean
}


export default function SocialButtons({ backgroundVisible = true }: Props) {


    const { hasCopied, onCopy } = useClipboard('kumudu.20@cse.mrt.ac.lk')

    return (
        <Stack spacing={6} direction='row'>
            <Tooltip label={hasCopied? 'Email Copied!' : 'Copy Email'} closeOnClick={false}> 
              <IconButton 
                variant={backgroundVisible ? 'solid' : 'ghost'}
                aria-label='Email' 
                icon={<MdEmail/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='MyCV'>
              <IconButton 
                variant={backgroundVisible ? 'solid' : 'ghost'}
                as={'a'} 
                href='https://drive.google.com/file/d/1yaW7p0Z9tuKFVJt8X4k8xA8aWvwxxwD0/view?usp=sharing' 
                target="_blank"
                rel='noopener'
                aria-label='Resume' 
                icon={<HiDocumentText/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='LinkedIn'>
              <IconButton
                variant={backgroundVisible ? 'solid' : 'ghost'} 
                as={'a'} 
                href='https://www.linkedin.com/in/mohotta' 
                target="_blank"
                rel='noopener'
                aria-label='LinkedIn' icon={<TfiLinkedin/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='Github'>
              <IconButton
                variant={backgroundVisible ? 'solid' : 'ghost'} 
                as={'a'} 
                href='https://www.github.com/mohotta' 
                target="_blank"
                rel='noopener'
                aria-label='Github' 
                icon={<BsGithub/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='Medium'>
              <IconButton 
                variant={backgroundVisible ? 'solid' : 'ghost'}
                as={'a'} 
                href='https://mohotta.medium.com/' 
                target="_blank"
                rel='noopener'
                aria-label='Github' 
                icon={<BsMedium/>} 
                onClick={onCopy}/>
            </Tooltip>
            <Tooltip label='Twitter'>
              <IconButton 
                variant={backgroundVisible ? 'solid' : 'ghost'}
                as={'a'} 
                href='https://www.twitter.com/_mohotta_' 
                target="_blank"
                rel='noopener'
                aria-label='Github' 
                icon={<FaSquareXTwitter/>} 
                onClick={onCopy}/>
            </Tooltip>
        </Stack>
    )

}

