import { Box, Divider, Grid, GridItem } from '@chakra-ui/react'
import NavBar from './navbar/NavBar'
import Intro from './intro/Intro'
import About from './about/About'
import ProjectList from './projects/ProjectList'
import PostList from './posts/PostList'
import Footer from './footer/Footer'
import ScrlBtn from './ScrlBtn'
import SkillList from './skills/SkillList'


function App() {

  return (
    <>
      <Grid 
        templateAreas={` "nav" "main" `}
        templateColumns={'1fr'}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <Box>
            <Intro/>
            <Divider orientation='horizontal'/>
            <About/>
            <Divider orientation='horizontal' marginTop='70px' />
            <SkillList/>
            <Divider orientation='horizontal' marginTop='70px' />
            <ProjectList/>
            <Divider orientation='horizontal' marginTop='70px' />
            <PostList/>
            <Footer />
          </Box>
        </GridItem>
      </Grid>
      <ScrlBtn/>
    </>)
}

export default App
