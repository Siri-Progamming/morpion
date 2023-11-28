import Square from './Square.tsx'
import {useEffect, useState} from "react";

function Board(props) {
    const {onBoardUpdate} = props
    const [playingSymbol, setPlayingSymbol] = useState(props.playingSymbol)
    const initialValue = props.initialValue

    const [squares, setSquares] = useState(Array(9).fill(initialValue))
    const [squaresHistory, setSquaresHistory] = useState([squares])

    const generateSquares = () => {
        return squares.map((value, index) => (
            <Square
                key={index}
                id={index}
                initialValue={initialValue}
                playingSymbol={playingSymbol}
                onClickOnSquare={handleClickOnSquare}
            />))
        }

    useEffect(() => {
        console.log('Premier à commencer : ', playingSymbol)
        setSquares(squares)
    }, [])

    const handleClickOnSquare = (e) => {
        // On met à jour les squares
        squares[e.id] = e.playedSymbol
        // On ajoute l'était de la grille dans l'historique
        setSquaresHistory([...squaresHistory, squares])
        // On check s'il y a un gagnant
        if(checkWinner(squares) != null){
            onBoardUpdate({winner: checkWinner(squares)})
        }
        //On met à jour le symbole qui doit jouer
        setPlayingSymbol(e.playingSymbol)
    }

    function checkWinner(squares) {
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
