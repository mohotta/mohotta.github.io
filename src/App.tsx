import './App.css'
import About from './about/About'
import Articles from './articles/Articles'
import Contact from './contact/Contact'
import Home from './home/Home'
import NavigationHeader from './navigation/header/NavigationHeader'
import NavigationSidebar from './navigation/sidebar/NavigationSidebar'
import Portfolio from './portfolio/Portfolio'
import Resume from './resume/Resume'
import ScrlBtn from './scroll/ScrlBtn'

function App() {

  return (
    <>
      <NavigationSidebar/>
      <NavigationHeader/>
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Articles/>
      <Contact/>
      <ScrlBtn/>
    </>
  )
}

export default App
