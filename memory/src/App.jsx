import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import SingleCard from './components/SingleCard';

// saving each card image in an array as an object
const cardImages = [
  //{ "src": "/img/background.jpg"},
  { "src": "/img/boot.jpg", matched: false},
  { "src": "/img/dress.jpg", matched: false},
  { "src": "/img/heel.jpg", matched: false},
  { "src": "/img/lipstick.jpg", matched: false},
  { "src": "/img/nails.jpg", matched: false},
  //{ "src": "/img/purse.jpg"},
  { "src": "/img/wig.jpg", matched: false}
];


function App() {
  //setting the state
  const [cards, setCards] = useState([]);

  //setting the state for the turns

  const [turns, setTurns] = useState(0); 

  //Create a state for the cards the user picks

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const [disabled, setDisabled] = useState(false);

  // this function does three main things: duplicate each card, shuffle the cards with the sort method and generate an id for each card 

  const shuffleCards = () => {
    // duplicate each card
    const shuffleCards = [...cardImages, ...cardImages]
      // shuffle the cards
      .sort(() => Math.random() - 0.5)
      // generate an id for each card
      .map((card) => ( {...card, id: Math.random() } ))

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);

    setTurns(0)

  }

  // We will create a function that will handle the click event on the card
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card) // if choiceOne is true, set choiceTwo to card, else set choiceOne to card
  }

  //compare the two selected cards
  React.useEffect(() => {
    
    if (choiceOne && choiceTwo) {
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) { // if the card src is the same as the choiceOne src, we have a match
              return {...card, matched: true} // return the card with the matched property set to true
            } else {
              return card // return the card as is
            }
          })
        })

        console.log('You got a match, henny!')
        resetTurn()
      } else {
        console.log('Sashay, hunty!')
        setTimeout(() => resetTurn(), 1000)
      }
      
    }
  }, [choiceOne, choiceTwo])

  //Afunction that resets the turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

//starts a new game as the page loads
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Drag Match</h1>
      <button onClick={ shuffleCards }>Shantay, let's play! </button>
      
      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={ card }
            handleChoice={handleChoice} // passing the function as a prop
            flipped={ card === choiceOne || card === choiceTwo || card.matched }
            disabled={disabled}
          />

        ))}

      </div>
      <h2>Turns: {turns}</h2>
    </div>
  )
}

export default App
