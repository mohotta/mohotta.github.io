import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from './navbar/NavBar'

function App() {

  return (
    <>
      <Grid templateAreas={{
        base: ` "nav" "main" `,
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
        </GridItem>
      </Grid>
    </>)
}

export default App
