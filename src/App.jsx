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
import { useEffect } from 'react'

function App() {

  useEffect(() => {

    const cards = document.querySelectorAll(".section")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section")
        }
        else {
          entry.target.classList.remove("show-section")
        }
      })
    }, {
      threshold: 0
    })

    cards.forEach(card => {
      observer.observe(card)
    })

  })

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
          <div className="section"><Home/></div>
          <div className="section"><About/></div>
          <div className="section"><Resume/></div>
          <div className="section"><Portfolio/></div>
          <div className="section"><Articles/></div>
          <div className="section"><Contact/></div>
        </div>
        <div className="footer">
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App
