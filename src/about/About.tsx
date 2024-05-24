import { Text, Flex, Heading, Image, SimpleGrid, IconButton, Tooltip } from "@chakra-ui/react";
import aboutImage from './images/Detailed-examination.svg'
import schoolLogo from './images/ganaknada-logo.png'
import uniLogo from './images/University_of_Moratuwa_logo.png'
import exam from './images/exam.png'
import gpa from './images/score.png'
import hometown from './images/house.png'
import ml from './images/ml.png'
import data from './images/data.png'
import webdev from './images/coding.png'
import linux from './images/linux.png'
import tech from './images/lightbulb.png'
import program from './images/programming.png'
import photo from './images/photography.png'
import { FiInfo } from "react-icons/fi";

export default function About() {

    const facts = [
        {
            id: 1,
            icon: schoolLogo,
            firstLine: 'Gankanda Central',
            secondLine: 'College Pelmadulla',
            attrLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRctHUaq0V6g9lx2kUv0bZRspyEr9yx-SUxRtZXj7MKA&s'
        },
        {
            id: 2,
            icon: exam,
            firstLine: 'GCE A/L 2019',
            secondLine: 'DR - 3 IR - 21',
            attrLink: 'https://www.flaticon.com/free-icons/exam'
        },
        {
            id: 3,
            icon: uniLogo,
            firstLine: 'BSc. in Engineering UG',
            secondLine: 'CSE (Data Science) UoM',
            attrLink: 'https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png'
        },
        {
            id: 4,
            icon: gpa,
            firstLine: 'Current GPA',
            secondLine: '3.82 / 4.0',
            attrLink: 'https://www.flaticon.com/free-icons/exam'
        },
        {
            id: 5,
            icon: ml,
            firstLine: 'Machine learning: ',
            secondLine: '0.5 yr experience',
            attrLink: 'https://www.flaticon.com/free-icons/machine-learning'
        },
        {
            id: 6,
            icon: data,
            firstLine: 'Data Science: ',
            secondLine: '0.5 yr experience',
            attrLink: 'https://www.flaticon.com/free-icons/epidemiology'
        },
        {
            id: 7,
            icon: webdev,
            firstLine: 'Web Development: ',
            secondLine: '0.5 yr experience',
            attrLink: 'https://www.flaticon.com/free-icons/web-development'
        },
        {
            id: 8,
            icon: linux,
            firstLine: 'In love with: ',
            secondLine: 'Linux & FOSS',
            attrLink: 'https://www.flaticon.com/free-icons/linux'
        },
        {
            id: 9,
            icon: tech,
            firstLine: 'In love with: ',
            secondLine: 'New Techs',
            attrLink: 'https://www.flaticon.com/free-icons/innovation'
        },
        {
            id: 10,
            icon: program,
            firstLine: 'In love with: ',
            secondLine: 'Programming',
            attrLink: 'https://www.flaticon.com/free-icons/code'
        },
        {
            id: 11,
            icon: photo,
            firstLine: 'In love with: ',
            secondLine: 'Photography',
            attrLink: 'https://www.flaticon.com/free-icons/photography'
        },
        {
            id: 12,
            icon: hometown,
            firstLine: 'Hometown: ',
            secondLine: 'Godakalwela, LK',
            attrLink: 'https://www.flaticon.com/free-icons/house'
        },
    ]

    return (
        <Flex 
            id="about"
            className="section"
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'100vh'}
            marginLeft={{base: "0px", lg:"70px"}}
            position={'relative'}
            zIndex={0}
            paddingY={'2vh'}
        >
            {/* title */}
            <Flex
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Text
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontWeight={'500'}
                    fontSize={'1.3rem'}
                >
                    get to know more
                </Text>
                <Heading
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontSize={'3rem'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    about me
                </Heading>
            </Flex>
            {/* info */}
            <Flex
                width={'100%'}
                flexDirection={{base: 'column', lg: 'row'}}
                alignItems={'center'}
                justifyContent={'space-evenly'}
            >
                <Image
                    src={aboutImage}
                    width={{base:'70%', lg:'30%'}}
                    loading='lazy'
                />

                <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={{base: '90%', lg:'60%'}} 
                >
                    <SimpleGrid minChildWidth='250px' spacing='40px' paddingY={'40px'} width={'100%'}>
                        {
                            facts.map((fact) => 
                                <Flex
                                    height='100px'
                                    maxWidth={'300px'}
                                    flexDirection={'row'}
                                    justifyContent={'left'}
                                    gap={5}
                                    paddingLeft={5}
                                    alignItems={'center'}
                                    borderLeft={'3px dotted'}
                                    id={fact.id.toString()}
                                >
                                    <Image src={fact.icon} width={'70px'} loading='lazy'/>
                                    <Text
                                        fontFamily={`"Poetsen One", sans-serif`}
                                        fontWeight={'500'}
                                        fontSize={'1rem'}
                                    >
                                        {fact.firstLine} <br/> {fact.secondLine}
                                    </Text>
                                    <Tooltip label='icon credits'>
                                        <IconButton aria-label="attribution" icon={<FiInfo/>} variant={'link'} size={'sm'} as={'a'} href={fact.attrLink} target="_blank"/>
                                    </Tooltip>
                                </Flex>
                            )
                        }
                    </SimpleGrid>
                    <Text
                        fontFamily={`"Poetsen One", sans-serif`}
                        fontStyle={'italic'}
                        fontSize={'1rem'}
                        width={'90%'}
                    >
                        “A dedicated professional and technology enthusiast with strong teamwork
                        and collaboration skills. I thrive in diverse environments and am
                        committed to driving team success. Passionate about leveraging
                        technology for growth, I aim to contribute significantly to a company’s
                        success, always striving for excellence and continuous learning.”
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    )
}
