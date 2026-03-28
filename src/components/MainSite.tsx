import Gallery from './Gallery'
import React, { useState } from 'react';
import './styles/MainSiteStyle.scss';
import { loadSubsites } from '../utils/subsitesLoader';
import Calendar365 from './Calendar365'
import AboutMe from './AboutMe'

const MainSite = () => {
  const subsites = loadSubsites();
  const allSites = [{ name: 'About', type: 'about' }, ...subsites];
  const [activeIndex, setActiveIndex] = useState(0); // 0 = About Me as default

  return (
    <div id="app" className="main-layout">
      <nav className="navbar">
        {allSites.map((subsite, idx) => (
          <button
            key={idx}
            className={activeIndex === idx ? 'active' : ''}
            onClick={() => setActiveIndex(idx)}
          >
            {subsite.name}
          </button>
        ))}
      </nav>
      <div className="subsite-content">
        {activeIndex === 0 ? (
          <AboutMe />
        ) : allSites[activeIndex].name === '365' && 'images' in allSites[activeIndex] ? (
          <Calendar365 images={(allSites[activeIndex] as { images: string[] }).images} />
        ) : (
          <>
            <h2>{allSites[activeIndex]?.name}</h2>
{'description' in allSites[activeIndex] && (
  <div
    className="subsite-description"
    dangerouslySetInnerHTML={{
      __html: allSites[activeIndex].description.join('\n'),
    }}
  />
)}
            {'images' in allSites[activeIndex] && (
<Gallery images={allSites[activeIndex]?.images} pdfs={allSites[activeIndex]?.pdfs} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
export default MainSite;