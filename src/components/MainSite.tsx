import Gallery from './Gallery'
import React, { useState } from 'react';
import './styles/MainSiteStyle.css';
import { loadSubsites } from '../utils/subsitesLoader';
import Calendar365 from './Calendar365'

const MainSite = () => {

      const subsites = loadSubsites();                 
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
        <p>{subsites[activeIndex]?.description.join(' ')}</p>
        {subsites[activeIndex]?.name === '365' ? (
          <Calendar365 images={subsites[activeIndex].images} />
        ) : (
          <Gallery images={subsites[activeIndex]?.images} />
        )}
      </div>
    </div>
  );
}
export default MainSite;