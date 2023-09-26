import { Grid, GridItem, VStack } from '@chakra-ui/react'
import NavBar from './navbar/NavBar'
import Intro from './intro/Intro'


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
          </VStack>
        </GridItem>
      </Grid>
    </>)
}

export default App
