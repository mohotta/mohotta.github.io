import { FiArrowUp } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { Flex, IconButton } from '@chakra-ui/react'

export default function ScrlBtn() {

    const [showBtn, setShowBtn] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowBtn(true)
        }
        else {
            setShowBtn(false)
        }
    }

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <Flex
            justifyContent={'right'}
            alignItems={'center'}
            flexDirection={'row'}
        >
            {
                showBtn ? 
                <IconButton 
                    icon={<FiArrowUp/>} 
                    aria-label='scroll-btn' 
                    size={'lg'} 
                    onClick={handleClick}
                    position={'fixed'}
                    right={'10px'}
                    bottom={'10px'}
                    rounded={'full'}
                />
                :
                <></>
            }
        </Flex>
    )

}
