import './SingleCard.css';

import React from 'react'

const SingleCard = ( {card, handleChoice, flipped } ) => {

  const handleClick = () => {
    handleChoice(card)

  }  
  return (
    <div className="card">
        <div className={flipped ? "flipped" : ""}> 
          <img src={card.src} alt="card front" className="front"/>
          
          <img 
            className='back'
            src="/img/background.jpg" 
            onClick={handleClick}
            alt="card back"/>
            
        </div>      
    </div>
  )
}

export default SingleCard