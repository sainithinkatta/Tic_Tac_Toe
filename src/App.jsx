import './App.css'
import Player from './components/player'
import GameBoard from './components/GameBoard'

function App() {

  return (
    <>
      <div id='game-container'>
        <h1> TIC TAC TOE </h1>

        <ol id='players'>
          <Player 
            playerName="Player 1"
            playerSymbol="X"
          />

          <Player 
            playerName="Player 2"
            playerSymbol="O"
          />
        </ol>

        <GameBoard />
      </div>
    </>
  )
}

export default App
