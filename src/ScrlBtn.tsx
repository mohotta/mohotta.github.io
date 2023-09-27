import React, { useEffect, useRef } from 'react';
import { IconButton } from '@chakra-ui/react';
import { ArrowUpIcon } from '@chakra-ui/icons';
import { gsap } from 'gsap';

const ScrlBtn = () => {

    const [isVisible, setIsVisible] = React.useState(false);
    const scrollButton = useRef<gsap.TweenTarget>(null);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isVisible) {
            gsap.to(scrollButton.current, {
                duration: 0.5,
                opacity: 1,
                zIndex: 100,
        });
    } else {
      gsap.to(scrollButton.current, {
        duration: 0.5,
        opacity: 0,
        zIndex: -1,
      });
    }
    }, [isVisible]);

    const handleScroll = () => {
        if (window.scrollY > 100) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    const handleClick = () => {
        window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
        });
    };

    if (scrollButton.current !== undefined) {

        return (
            <IconButton
            aria-label="scroll to top"
            icon={<ArrowUpIcon />}
            size="lg"
            colorScheme="gray"
            ref={scrollButton}
            onClick={handleClick}
            position="fixed"
            bottom="4rem"
            right="4rem"
            zIndex="-1"
            opacity="0"
            />
        );

    }

};

export default ScrlBtn;