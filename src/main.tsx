import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Gallery from './components/Gallery'
import { loadSubsites } from './utils/subsitesLoader'

const App = () => {
  const subsites = loadSubsites()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div id="app">
      <nav className="navbar">
        {subsites.map((subsite, idx) => (
          <button
            key={idx}
            className={activeIndex === idx ? 'active' : ''}
            onClick={() => setActiveIndex(idx)}
          >
            {subsite.name}
          </button>
        ))}
      </nav>
      <div className="subsite">
        <h2>{subsites[activeIndex]?.name}</h2>
        <Gallery images={subsites[activeIndex]?.images} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));