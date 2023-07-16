import React, { useEffect, useState } from "react";
import "./index.css";
import PropTypes from 'prop-types'

const Timer = ({ initial }) => {
  const [current, setCurrent] = useState(initial)

  let myTimer = null
  useEffect(() => {
    if(current === 0) return

    myTimer = setTimeout(() => setCurrent(current-1), 1000)
  })

  const stopTimer = () => clearTimeout(myTimer)

  return (
    <div className="mt-100 layout-column align-items-center justify-content-center" >
      <div className="timer-value" data-testid="timer-value">{current}</div>
      <button className="large" data-testid="stop-button" onClick={stopTimer}>Stop Timer</button>
    </div >
  )
}

Timer.propTypes = {
  initial: PropTypes.number.isRequired,
}

export default Timer