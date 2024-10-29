import './App.css'
import Player from './components/player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function changePlayer () {
    setActivePlayer((player) => player === 'X' ? 'O' : 'X' )
  }

  return (
    <>
      <div id='game-container'>
        <h1> TIC TAC TOE </h1>

        <ol id='players' className='highlight-player'>
          <Player 
            playerName="Player 1"
            playerSymbol="X"
            isActive = { activePlayer === 'X'}
          />

          <Player 
            playerName="Player 2"
            playerSymbol="O"
            isActive = { activePlayer === 'O'}
          />
        </ol>

        <GameBoard 
          changePlayer={changePlayer} 
          activePlayer = {activePlayer}
        />
      </div>
    </>
  )
}

export default App
