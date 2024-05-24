import { Flex, Heading, Text, Image, SimpleGrid, Tooltip, IconButton, Button } from "@chakra-ui/react";
import cml from './images/cml.png'
import { FiInfo } from "react-icons/fi";
import python from './images/python.png'
import torch from './images/torch.png'
import tf from './images/tf.png'
import php from './images/php.png'
import cpp from './images/cpp.png'
import linux from './images/linux.png'
import clean from './images/clean.png'
import css from './images/css.png'
import docker from './images/docker.png'
import ethics from './images/ethics.png'
import html from './images/html.png'
import java from './images/java.png'
import js from './images/js.png'
import lang from './images/lang.png'
import node from './images/node.png'
import object from './images/object.png'
import pandas from './images/pandas.png'
import pattern from './images/pattern.png'
import postgre from './images/postgre.png'
import prob from './images/prob.png'
import sim from './images/sim.png'
import sql from './images/sql.png'
import team from './images/team.png'
import ts from './images/ts.png'
import vis from './images/vis.png'
import vision from './images/vision.png'
import windows from './images/windows.png'
import eng from './images/eng.png'
import problem from './images/problem.png'
import chakra from './images/chakra.png'
import vite from './images/vite.png'
import numpy from './images/numpy.png'
import flask from './images/flask.png'
import kube from './images/kube.png'
import gcloud from './images/gcloud.png'
import go from './images/go.png'
import karate from './images/karate.png'
import sklearn from './images/skl.png'
import tekton from './images/tekton.png'
import { FaFileInvoice } from "react-icons/fa6";

export default function Resume() {

    interface typeNot {
        id: number;
        name: string;
        icon: string;
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
                icon: vis,
                confidence: 'intermediate'
            },
            {
                id: 2,
                name: 'data manipulation',
                icon: sim,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'data cleaning',
                icon: clean,
                confidence: 'intemediate'
            },
            {
                id: 4,
                name: 'prbability & statistics',
                icon: prob,
                confidence: 'experienced'
            },

        ],
        ml: [
            {
                id: 1,
                name: 'python',
                icon: python,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'numpy',
                icon: numpy,
                confidence: 'experienced'
            },
            {
                id: 3,
                name: 'pandas',
                icon: pandas,
                confidence: 'experienced'
            },
            {
                id: 4,
                name: 'scikit learn',
                icon: sklearn,
                confidence: 'experienced'
            },
            {
                id: 5,
                name: 'pytorch',
                icon: torch,
                confidence: 'intemediate'
            },
            {
                id: 6,
                name: 'tensorflow',
                icon: tf,
                confidence: 'intemediate'
            },
            {
                id: 7,
                name: 'nlp & llms',
                icon: lang,
                confidence: 'intemediate'
            },
            {
                id: 8,
                name: 'computer vision',
                icon: vision,
                confidence: 'basic'
            },
        ],
        front: [
            {
                id: 1,
                name: 'html',
                icon: html,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'css',
                icon: css,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'javascript',
                icon: js,
                confidence: 'intermediate'
            },
            {
                id: 4,
                name: 'typescript',
                icon: ts,
                confidence: 'intermediate'
            },
            {
                id: 5,
                name: 'vite',
                icon: vite,
                confidence: 'intermediate'
            },
            {
                id: 6,
                name: 'chakra ui',
                icon: chakra,
                confidence: 'intermediate'
            },
            {
                id: 7,
                name: 'php',
                icon: php,
                confidence: 'basic'
            },
        ],
        back: [
            {
                id: 1,
                name: 'python',
                icon: python,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'flask',
                icon: flask,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'nodejs',
                icon: node,
                confidence: 'basic'
            },
            {
                id: 4,
                name: 'go',
                icon: go,
                confidence: 'intermediate'
            },
            {
                id: 5,
                name: 'sql databases',
                icon: sql,
                confidence: 'intermediate'
            },
            {
                id: 6,
                name: 'postgresql',
                icon: postgre,
                confidence: 'intermediate'
            },
            {
                id: 7,
                name: 'java',
                icon: java,
                confidence: 'intermediate'
            },
            {
                id: 8,
                name: 'php',
                icon: php,
                confidence: 'basic'
            },
        ],
        se: [
            {
                id: 1,
                name: 'c++',
                icon: cpp,
                confidence: 'intermediate'
            },
            {
                id: 2,
                name: 'java',
                icon: java,
                confidence: 'intermediate'
            },
            {
                id: 3,
                name: 'problem solving',
                icon: problem,
                confidence: 'intermediate'
            },
            {
                id: 4,
                name: 'oop',
                icon: object,
                confidence: 'expierienced'
            },
            {
                id: 5,
                name: 'design patterns',
                icon: pattern,
                confidence: 'intermediate'
            },
            {
                id: 6,
                name: 'docker',
                icon: docker,
                confidence: 'intermediate'
            },
            {
                id: 7,
                name: 'tekton CI/CD',
                icon: tekton,
                confidence: 'basic'
            },
            {
                id: 8,
                name: 'kubernetes',
                icon: kube,
                confidence: 'basic'
            },
            {
                id: 9,
                name: 'gcloud',
                icon: gcloud,
                confidence: 'basic'
            },
            {
                id: 10,
                name: 'karate testing',
                icon: karate,
                confidence: 'experienced'
            },
        ],
        other: [
            {
                id: 1,
                name: 'linux os',
                icon: linux,
                confidence: 'experienced'
            },
            {
                id: 2,
                name: 'windows os',
                icon: windows,
                confidence: 'experienced'
            },
            {
                id: 3,
                name: 'teamwork',
                icon: team,
                confidence: 'very good'
            },
            {
                id: 4,
                name: 'english laguage',
                icon: eng,
                confidence: 'intermediate'
            },
            {
                id: 5,
                name: 'sinhala language',
                icon: lang,
                confidence: 'native'
            },
            {
                id: 6,
                name: 'work ethics',
                icon: ethics,
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
                            id={domain}
                        >
                            <Heading
                                fontFamily={`"Poetsen One", sans-serif`}
                                fontSize={'2rem'}
                                fontWeight={'500'}
                                textAlign={'center'}
                            >
                                {domainNames[domain]}
                            </Heading>
                            <SimpleGrid minChildWidth='160px' spacing='10px' paddingY={'40px'} width={'100%'}>
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
                                            id={skill.id.toString()}
                                        >
                                            <Image src={skill.icon} alt="product icon" width={'20px'}/>
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

