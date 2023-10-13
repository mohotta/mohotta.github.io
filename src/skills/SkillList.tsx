import { Box, CircularProgress, Stack, Container, Heading, Text, Flex, useColorModeValue, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { useState } from "react";

export default function SkillList() {

    const color = useColorModeValue('blue.600', 'blue.300')

    const [tabIndex, setTabIndex] = useState(0)

    const skills = [
      {
        name: 'python',
        value: 85,
        type: 0
      },
      {
        name: 'java',
        value: 75,
        type: 0
      },
      {
        name: 'javascript',
        value: 90,
        type: 0
      },
      {
        name: 'typescript',
        value: 90,
        type: 0
      },
      {
        name: 'C plus plus',
        value: 50,
        type: 0
      },
      {
        name: 'numpy',
        value: 65,
        type: 1
      },
      {
        name: 'pandas',
        value: 70,
        type: 1
      },
      {
        name: 'seaborn',
        value: 70,
        type: 1
      },
      {
        name: 'matplotlib',
        value: 60,
        type: 1
      },
      {
        name: 'REACT',
        value: 78,
        type: 1
      },
      {
        name: 'ChakraUI',
        value: 90,
        type: 2
      },
      {
        name: 'tensorflow',
        value: 40,
        type: 2
      },
      {
        name: 'pytorch',
        value: 35,
        type: 2
      },
    ] 

    const filteredSkills = skills.filter((skill) => skill.type == tabIndex)

    return (
        <Box p={4} id='skills'>
          <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
            <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} marginTop={'70px'}>
              MY SKILLS
            </Heading>
            <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
              
            </Text>
          </Stack>
          <Container maxW={'5xl'} mt={12}>          
          <Tabs isFitted variant='line' onChange={(index) => {
            setTabIndex(index) 
            console.log(index)}}>
            <TabList mb='1em'>
              <Tab>languages</Tab>
              <Tab>libraries</Tab>
              <Tab>frameworks</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              <Stack direction={'row'} justifyContent={'center'} spacing={{ base:6, md:8, lg:10 }} flexWrap={'wrap'}>
                {
                  filteredSkills.map((skill) => (
                    <Flex justifyContent={'center'} direction={'column'}>
                      <CircularProgress value={skill.value} color={color} size={'100px'}>
                      </CircularProgress>
                      <Text align={'center'}> {skill.name} </Text>
                    </Flex>
                  ))
                }
              </Stack>
              </TabPanel>
              <TabPanel>
              <Stack direction={'row'} justifyContent={'center'} spacing={{ base:6, md:8, lg:10 }} flexWrap={'wrap'}>
                {
                  filteredSkills.map((skill) => (
                    <Flex justifyContent={'center'} direction={'column'}>
                      <CircularProgress value={skill.value} color={color} size={'100px'}>
                      </CircularProgress>
                      <Text align={'center'}> {skill.name} </Text>
                    </Flex>
                  ))
                }
              </Stack>
              </TabPanel>
              <TabPanel>
              <Stack direction={'row'} justifyContent={'center'} spacing={{ base:6, md:8, lg:10 }} flexWrap={'wrap'}>
                {
                  filteredSkills.map((skill) => (
                    <Flex justifyContent={'center'} direction={'column'}>
                      <CircularProgress value={skill.value} color={color} size={'100px'}>
                      </CircularProgress>
                      <Text align={'center'}> {skill.name} </Text>
                    </Flex>
                  ))
                }
              </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
          </Container>
        </Box>
    )

}

