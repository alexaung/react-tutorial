import React, { Fragment, useState, useEffect, useCallback } from 'react'
import 'h8k-components'

import { image1, image2, image3, image4 } from './assets/images'
import { Thumbs, Viewer } from './components'

const title = 'Catalog Viewer'
const slideDuration = 3000
const catalogsList = [
    { thumb: image1, image: image1 },
    { thumb: image2, image: image2 },
    { thumb: image3, image: image3 },
    { thumb: image4, image: image4 }
]

function App() {
  const [ catalogs, setCatalogs ] = useState(catalogsList)
  const [ activeIndex, setActiveIndex ] = useState(0)
  const [ isSliding, setIsSliding ] = useState(false)

  const handleNextClick = useCallback(() => {
    setActiveIndex((activeIndex + 1) % catalogs.length);
  }, [activeIndex, catalogs])

  const handlePrevClick = useCallback(() => {
    setActiveIndex((activeIndex - 1 + catalogs.length) % catalogs.length);
  }, [activeIndex, catalogs])

  const handleThumbClick = useCallback((idx) => {
    setActiveIndex(idx);
  }, [])

  const handleSliding = useCallback((e) => {
    setIsSliding(e.target.checked);
  }, [])

  useEffect(() => {
    if (isSliding) {
      const interval = setInterval(() => {
        handleNextClick();
      }, slideDuration);
      return () => clearInterval(interval);    
    }
  }, [isSliding, handleNextClick]);

  return (
    <Fragment>
      <h8k-navbar header={ title }></h8k-navbar>
      <div className='layout-column justify-content-center mt-75'>
        <div className='layout-row justify-content-center'>
          <div className='card pt-25'>
            <Viewer catalogImage={ catalogs[activeIndex].image } />
            <div className='layout-row justify-content-center align-items-center mt-20'>
            <button 
              className="icon-only outlined"
              data-testid="prev-slide-btn"
              onClick={handlePrevClick}
            >
              <i className="material-icons">arrow_back</i>
            </button>
              <Thumbs 
                items={ catalogs } 
                currentIndex={ activeIndex } 
                handleClick={handleThumbClick}
              />
            <button 
              className="icon-only outlined"
              data-testid="next-slide-btn"
              onClick={handleNextClick}
            >
              <i className="material-icons">arrow_forward</i>
            </button>
            </div>
          </div>
        </div>
        <div className='layout-row justify-content-center mt-25'>
          <input 
            type='checkbox'
            data-testid='toggle-slide-show-button'
            onChange={handleSliding}
          /> 
          <label className='ml-6'>Start Slide Show</label>
        </div>
      </div>
    </Fragment>
  )
}

export default App
