import { Box, Grid, GridItem } from '@chakra-ui/react'
import NavBar from './navbar/NavBar'
import Intro from './intro/Intro'
import About from './about/About'
import ProjectList from './projects/ProjectList'
import PostList from './posts/PostList'
import Footer from './footer/Footer'
import './app.css'
import ScrlBtn from './ScrlBtn'


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
            <About/>
            <ProjectList/>
            <PostList/>
            <Footer />
          </Box>
        </GridItem>
      </Grid>
      <ScrlBtn/>
    </>)
}

export default App
