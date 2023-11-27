import Board from './Board.tsx'
import {useEffect, useState} from 'react'

function Game() {
    const symbols = ['X', 'O']

    function initialize(){
        setGameState(initGame())
        setWinner(null)
    }

     const initGame = () => {
        console.log('initGame')
        return {
            // Choisir si le premier est X ou O
            playingSymbol: symbols[Math.floor(Math.random() * symbols.length)],
            // Vider les cases
            initialValue: ''
        }
    }
    const [gameState, setGameState] = useState(() => initGame())
    const [winner, setWinner] = useState<string | null>(null)

    useEffect(() => {
        // setGameState(initGame())
        console.log('Game Mounted')
        if(winner != null) {
            alert('Le gagnant est : ' + winner.toString())
            initialize()
        }
        return () => {
            console.log('Game Unmounted')
        }
    }, [winner])

    const handleBoardUpdate = (e) => {
        console.log('HandlingBoardUpdate')
        setWinner(e.winner)
    }

    return (
        <>
            <h1 className={`font-bold text-center mb-10 mt-0
            `}>TIC TAC TOE</h1>
            <Board playingSymbol={gameState.playingSymbol}
                   initialValue={gameState.initialValue}
                   onBoardUpdate={handleBoardUpdate}/>
        </>
    )
}

export default Game
