import Square from './Square.tsx'
import { useEffect, useState } from 'react'

function Board (props) {
  const { boardSendingWinner, oneMoreTime} = props
  const [playingSymbol, setPlayingSymbol] = useState(props.playingSymbol)
  const [squares, setSquares] = useState(initSquares())
  const [squaresHistory, setSquaresHistory] = useState(squares)

  const generateSquares = () => {
    console.log('Generating squares')
    return squares.map((value, index) => (
            <Square
                key={index}
                id={index}
                initialValue={''}
                playingSymbol={playingSymbol}
                onClickOnSquare={handleClickOnSquare}
            />))
  }
  function initSquares (): string[] {
    console.log('Initialising Squares')
    return Array(9).fill('')
  }

  useEffect(() => {
    console.log('Premier à commencer : ', playingSymbol)
    return () => {

    };
  }, []);

  useEffect(() => {
    if (oneMoreTime) {
      console.log('Resetting Board')
      setSquares(Array(9).fill(''))
    }
  }, [oneMoreTime])

  const handleClickOnSquare = (e) => {
    // On met à jour les squares
    squares[e.id] = e.playedSymbol
  // On ajoute l'était de la grille dans l'historique
  setSquaresHistory(prevSquaresHistory =>[...squaresHistory, squares[e.id]])
  console.log("Nombre de coups : "+squaresHistory.length)
    // On check s'il y a un gagnant
    if (checkWinner(squares) != null) {
      boardSendingWinner({ winner: checkWinner(squares) })
    }
    // On met à jour le symbole qui doit jouer
    setPlayingSymbol(e.playingSymbol)
    setSquares(squares)
  }

  function checkWinner (squares) {
    console.log('Checking for winner')
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // lignes
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // colonnes
      [0, 4, 8],
      [2, 4, 6] // diagonales
    ]

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i]
      console.log('squares[a] : ', squares[a])
      if (squares[a] === squares[b] && squares[a] === squares[c] && squares[a] !== '') {
        console.log('Le gagnant est : ', squares[a])
        return squares[a]
      }
    }
    return null
  }

  return (
        <>
            <div className="grid grid-cols-3
                            gap-4"
            >
                {generateSquares()}
            </div>
            {/* TODO: Afficher l'historique des coups */}
            <div>
            </div>
        </>
  )
}

export default Board
