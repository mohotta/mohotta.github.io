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

    const cards = document.querySelectorAll(".section-wrap")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section-wrap")
        }
        else {
          entry.target.classList.remove("show-section-wrap")
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
          <div className="home-wrap section-wrap"><Home/></div>
          <div className="about-wrap section-wrap"><About/></div>
          <div className="resume-wrap section-wrap"><Resume/></div>
          <div className="portfolio-wrap section-wrap"><Portfolio/></div>
          <div className="articles-wrap section-wrap"><Articles/></div>
          <div className="contact-wrap section-wrap"><Contact/></div>
        </div>
        <div className="footer">
        </div>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App
