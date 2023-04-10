import React from 'react'
import { useState } from 'react';
import './App.css'

// saving each card image in an array as an object
const cardImages = [
  //{ "src": "/img/background.jpg"},
  { "src": "/img/boot.jpg"},
  { "src": "/img/dress.jpg"},
  { "src": "/img/heel.jpg"},
  { "src": "/img/lipstick.jpg"},
  { "src": "/img/nails.jpg"},
  //{ "src": "/img/purse.jpg"},
  { "src": "/img/wig.jpg"}
];


function App() {
  //setting the state
  const [cards, setCards] = useState([]);

  //setting the state for the turns

  const [turns, setTurns] = useState(0); 

  // We will create a function that does three things: duplicate each card, shuffle the cards with the sort method and generate an id for each card 

  const shuffleCards = () => {
    // duplicate each card
    const shuffleCards = [...cardImages, ...cardImages]
      // shuffle the cards
      .sort(() => Math.random() - 0.5)
      // generate an id for each card
      .map((card) => ( {...card, id: Math.random() } ))

    setCards(shuffleCards);

    setTurns(0)
  }


  return (
    <div className="App">
      <h1>Alo mona</h1>
      <button>meclickan</button>
      <div className="cards">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div>
              <img src={card.src} alt="card front" className='front'/>
              <img src="/img/background.jpg" alt="card back" className='back'/>

            </div>
          
          
          </div>

        ))}

      </div>
          
    </div>
  )
}

export default App
