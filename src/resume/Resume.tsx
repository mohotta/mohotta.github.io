import { Flex, Heading, Text, Image, SimpleGrid, Tooltip, IconButton, Button } from "@chakra-ui/react";
import cml from './images/cml.png'
import { FiInfo } from "react-icons/fi";
import { FaCss3Alt, FaFileInvoice, FaGolang, FaHtml5, FaJava, FaLanguage, FaLinux, FaPython } from "react-icons/fa6";
import { ReactElement } from "react";
import { SiChakraui, SiDocker, SiFlask, SiGooglecloud, SiJavascript, SiKubernetes, SiMusicbrainz, SiNodedotjs, SiNumpy, SiPandas, SiPhp, SiPostgresql, SiPytorch, SiScikitlearn, SiTekton, SiTensorflow, SiTypescript, SiVite, SiWindows } from "react-icons/si";
import { VscGraphLine, VscGraphScatter } from "react-icons/vsc";
import { MdCleaningServices, MdEmojiObjects, MdGppGood } from "react-icons/md";
import { RiRobotFill, RiTeamFill } from "react-icons/ri";
import { TbBrandCpp, TbFileTypeSql, TbKarate } from "react-icons/tb";
import { GiGearStickPattern, GiThink } from "react-icons/gi";

export default function Resume() {

    interface typeNot {
        id: number;
        name: string;
        icon: ReactElement;
        confidence: string;
      }
      
    interface typeNots {
        data: typeNot[];
        ml: typeNot[];
        front: typeNot[];
        back: typeNot[];
        se: typeNot[];
        other: typeNot[];
        [key: string]: typeNot[]; 
    }

    const skills: typeNots = {
        data: [
            {
                id: 1,
                name: 'data visualization',
                icon: <VscGraphLine/>,
                confidence: 'intermediate'
            },
            {
                id: 2,
                name: 'data manipulation',
                icon: <SiMusicbrainz/>,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'data cleaning',
                icon: <MdCleaningServices/>,
                confidence: 'intemediate'
            },
            {
                id: 4,
                name: 'prbability & statistics',
                icon: <VscGraphScatter/>,
                confidence: 'experienced'
            },

        ],
        ml: [
            {
                id: 1,
                name: 'python',
                icon: <FaPython/>,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'numpy',
                icon: <SiNumpy/>,
                confidence: 'experienced'
            },
            {
                id: 3,
                name: 'pandas',
                icon: <SiPandas/>,
                confidence: 'experienced'
            },
            {
                id: 4,
                name: 'scikit learn',
                icon: <SiScikitlearn/>,
                confidence: 'experienced'
            },
            {
                id: 5,
                name: 'pytorch',
                icon: <SiPytorch/>,
                confidence: 'intemediate'
            },
            {
                id: 6,
                name: 'tensorflow',
                icon: <SiTensorflow/>,
                confidence: 'intemediate'
            },
            {
                id: 7,
                name: 'nlp & llms',
                icon: <FaLanguage/>,
                confidence: 'intemediate'
            },
            {
                id: 8,
                name: 'computer vision',
                icon: <RiRobotFill/>,
                confidence: 'basic'
            },
        ],
        front: [
            {
                id: 1,
                name: 'html',
                icon: <FaHtml5/>,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'css',
                icon: <FaCss3Alt/>,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'javascript',
                icon: <SiJavascript/>,
                confidence: 'intermediate'
            },
            {
                id: 4,
                name: 'typescript',
                icon: <SiTypescript/>,
                confidence: 'intermediate'
            },
            {
                id: 5,
                name: 'vite',
                icon: <SiVite/>,
                confidence: 'intermediate'
            },
            {
                id: 6,
                name: 'chakra ui',
                icon: <SiChakraui/>,
                confidence: 'intermediate'
            },
            {
                id: 7,
                name: 'php',
                icon: <SiPhp/>,
                confidence: 'basic'
            },
        ],
        back: [
            {
                id: 1,
                name: 'python',
                icon: <FaPython/>,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'flask',
                icon: <SiFlask/>,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'node',
                icon: <SiNodedotjs/>,
                confidence: 'basic'
            },
            {
                id: 4,
                name: 'go',
                icon: <FaGolang/>,
                confidence: 'intermediate'
            },
            {
                id: 5,
                name: 'sql databases',
                icon: <TbFileTypeSql/>,
                confidence: 'intermediate'
            },
            {
                id: 6,
                name: 'postgresql',
                icon: <SiPostgresql/>,
                confidence: 'intermediate'
            },
            {
                id: 7,
                name: 'java',
                icon: <FaJava/>,
                confidence: 'intermediate'
            },
            {
                id: 8,
                name: 'php',
                icon: <SiPhp/>,
                confidence: 'basic'
            },
        ],
        se: [
            {
                id: 1,
                name: 'c++',
                icon: <TbBrandCpp/>,
                confidence: 'intermediate'
            },
            {
                id: 2,
                name: 'java',
                icon: <FaJava/>,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'problem solving',
                icon: <GiThink/>,
                confidence: 'intermediate'
            },
            {
                id: 4,
                name: 'oop',
                icon: <MdEmojiObjects/>,
                confidence: 'expierienced'
            },
            {
                id: 5,
                name: 'design patterns',
                icon: <GiGearStickPattern/>,
                confidence: 'intermediate'
            },
            {
                id: 6,
                name: 'docker',
                icon: <SiDocker/>,
                confidence: 'intermediate'
            },
            {
                id: 7,
                name: 'tekton CI/CD',
                icon: <SiTekton/>,
                confidence: 'basic'
            },
            {
                id: 8,
                name: 'kubernetes',
                icon: <SiKubernetes/>,
                confidence: 'basic'
            },
            {
                id: 9,
                name: 'gcloud',
                icon: <SiGooglecloud/>,
                confidence: 'basic'
            },
            {
                id: 10,
                name: 'karate testing',
                icon: <TbKarate/>,
                confidence: 'experienced'
            },
        ],
        other: [
            {
                id: 1,
                name: 'linux os',
                icon: <FaLinux/>,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'windows os',
                icon: <SiWindows/>,
                confidence: 'experienced'
            },
            {
                id: 3,
                name: 'teamwork',
                icon: <RiTeamFill/>,
                confidence: 'very good'
            },
            {
                id: 4,
                name: 'english laguage',
                icon: <FaLanguage/>,
                confidence: 'intermediate'
            },
            {
                id: 5,
                name: 'sinhala language',
                icon: <FaLanguage/>,
                confidence: 'native'
            },
            {
                id: 6,
                name: 'work ethics',
                icon: <MdGppGood/>,
                confidence: 'best'
            },
        ]
    }

    const domains: string[] = [
        'data', 
        'ml',
        'front',
        'back',
        'se',
        'other'
    ]

    interface namesInterface { 
        data: string, 
        ml: string, 
        front: string, 
        back: string,
        other: string
        [key: string]: string; 
    }

    const domainNames: namesInterface  = {
        data: 'data science',
        ml: 'machine learning',
        front: 'frontend development',
        back: 'backend development',
        se: 'soft. engineering',
        other: 'other skills'
    }

    const exps = [
        {
            icon: cml,
            title: 'ML Eng. Intern',
            company: 'CML Insight Inc.',
            from: 'Nov 2023',
            to: 'May 2024',
            attrLink: 'https://www.cmlinsight.com/hubfs/In_LINE-1.png#keepProtocol'
        },
        
    ]

    return (
        <Flex 
            id="resume"
            className="section"
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            // minHeight={'100vh'}
            marginLeft={{base: "0px", lg:"70px"}}
            position={'relative'}
            zIndex={0}
            paddingY={'2vh'}
            paddingX={'20px'}
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
                    qualifications & skills
                </Text>
                <Heading
                    fontFamily={`"Poetsen One", sans-serif`}
                    fontSize={'3rem'}
                    fontWeight={'bold'}
                    textAlign={'center'}
                >
                    resume
                </Heading>
            </Flex>
            <SimpleGrid 
                columns={[1, null, 2]}
                spacing={'20px'}
                width={'100%'}
                marginTop={'20px'}
            >
                {
                    domains.map(domain => (
                        <Flex
                            flexDirection={'column'}
                            justifyContent={'left'}
                            alignItems={'center'}
                            border={'1px solid'}
                            borderRadius={'20px'}
                            padding={'20px'}
                        >
                            <Heading
                                fontFamily={`"Poetsen One", sans-serif`}
                                fontSize={'2rem'}
                                fontWeight={'500'}
                                textAlign={'center'}
                            >
                                {domainNames[domain]}
                            </Heading>
                            <SimpleGrid minChildWidth='150px' spacing='10px' paddingY={'40px'} width={'100%'}>
                                {
                                    skills[domain].map((skill) => 
                                        <Flex
                                            height='100px'
                                            maxWidth={'300px'}
                                            flexDirection={'row'}
                                            justifyContent={'left'}
                                            gap={5}
                                            paddingLeft={5}
                                            alignItems={'center'}
                                        >
                                            {skill.icon}
                                            <Flex
                                                flexDirection={'column'}
                                                justifyContent={'left'}
                                                alignItems={'left'}
                                            >
                                                <Text
                                                    fontFamily={`"Poetsen One", sans-serif`}
                                                    fontWeight={'500'}
                                                    fontSize={'1rem'}
                                                >
                                                    {skill.name}
                                                </Text>
                                                <Text
                                                    fontFamily={`"Poetsen One", sans-serif`}
                                                    fontWeight={'500'}
                                                    fontSize={'1rem'}
                                                    color={'gray.500'}
                                                >
                                                    {skill.confidence}
                                                </Text>
                                            </Flex>
                                        </Flex>
                                    )
                                }
                            </SimpleGrid>
                        </Flex>
                    ))
                }
                
            </SimpleGrid>
            <Flex
                width={'100%'}
                flexDirection={{base: 'column', lg: 'row'}}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                marginTop={'40px'}
            >
                <Flex
                    flexDirection={'column'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'90%'} 
                >
                    <Heading
                        fontFamily={`"Poetsen One", sans-serif`}
                        fontSize={'2rem'}
                        fontWeight={'500'}
                        textAlign={'center'}
                    >
                        professional experience
                    </Heading>
                    <SimpleGrid minChildWidth='300px' spacing='40px' paddingY={'40px'} width={'100%'}>
                        {
                            exps.map((exp) => 
                                <Flex
                                    // height='100px'
                                    maxWidth={'400px'}
                                    flexDirection={'row'}
                                    justifyContent={'left'}
                                    gap={5}
                                    paddingLeft={5}
                                    alignItems={'center'}
                                >
                                    <Image src={exp.icon} width={'70px'}/>
                                    <Text
                                        fontFamily={`"Poetsen One", sans-serif`}
                                        fontWeight={'500'}
                                        fontSize={'1rem'}
                                    >
                                        {exp.title} <br/> {exp.company} <br/> from: {exp.from} <br/> to: {exp.to}
                                    </Text>
                                    <Tooltip label='icon credits'>
                                        <IconButton aria-label="attribution" icon={<FiInfo/>} variant={'link'} size={'sm'} as={'a'} href={exp.attrLink} target="_blank"/>
                                    </Tooltip>
                                </Flex>
                            )
                        }
                    </SimpleGrid>
                </Flex>
            </Flex>
            <Button
                leftIcon={<FaFileInvoice/>}
                rounded={'full'}
                color={'gray.50'}
                bgColor={'gray.900'}
                _hover={{
                    bgColor: 'gray.700'
                }}
                size={'lg'}
                width={'250px'}
                as={'a'} 
                href="https://bit.ly/moh-cv" 
                target="_blank"
                fontFamily={`"Poetsen One", sans-serif`}
                marginTop={'40px'}
            > Download Resume </Button>
        </Flex>
    )

}

