import './App.css'
import NavHeader from './navigation/NavHeader'
import NavSidebar from './navigation/NavSidebar'

function App() {

  return (
    <div className='grid' id='grid'>
      <div className="header">
        <NavHeader/>
      </div>
      <div className="sidebar">
        <NavSidebar />
      </div>
      <div className="main" id='main'>
      </div>
      <div className="footer">

      </div>
    </div>
  )
}

export default App
