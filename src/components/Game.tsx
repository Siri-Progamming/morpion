import Board from './Board.tsx'
import {useEffect, useState} from 'react'

function Game() {
    const symbols = ['X', 'O']
    const initGame = () => {
        console.log('initGame')
        return {
            // Choisir si le premier est X ou O
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            // Vider les cases
            initialValue: '',
            isFirst: true
        }
    }
    const [gameState, setGameState] = useState(() => initGame())

    useEffect(() => {
        // setGameState(initGame())
        console.log('Game Mounted')
        console.log('isFirst : ', gameState.isFirst)
        return () => {
            console.log('Game Unmounted')
        }
    }, [])

    return (
        <Board symbol={gameState.symbol} initialValue={gameState.initialValue} isFirst={gameState.isFirst}/>
    )
}

export default Game
