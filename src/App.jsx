import './App.css'
import NavHeader from './navigation/header/NavHeader'
import NavSidebar from './navigation/side/NavSidebar'
import Home from './home/Home'
import About from './about/About'
import Resume from './resume/Resume'
import Portfolio from './portfolio/Portfolio'
import Articles from './articles/Articles'
import Contact from './contact/Contact'
import ScrollToTop from './scrl-to-top/ScrollToTop'

function App() {

  return (
    <div>
      <div className='grid' id='grid'>
        <div className="header">
          <NavHeader/>
        </div>
        <div className="sidebar">
          <NavSidebar />
        </div>
        <div className="main" id='main'>
          <Home/>
          <About/>
          <Resume/>
          <Portfolio/>
          <Articles/>
          <Contact/>
        </div>
        <div className="footer">
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App
