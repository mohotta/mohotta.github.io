import { Grid, GridItem, VStack } from '@chakra-ui/react'
import NavBar from './navbar/NavBar'
import Intro from './intro/Intro'
import About from './about/About'


function App() {

  return (
    <>
      <Grid templateAreas={{
        base: ` "nav " "main" `,
        lg: ` "nav" "main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '1fr'
      }}
      >
        <GridItem area={"nav"}>
          <NavBar />
        </GridItem>
        <GridItem area={"main"}>
          <VStack>
            <Intro/>
            <About/>
          </VStack>
        </GridItem>
      </Grid>
    </>)
}

export default App
