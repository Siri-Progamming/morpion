import Board from './Board.tsx'
import {useEffect, useState} from 'react'
import Popup from "./Popup.tsx";

function Game() {
    const symbols = ['X', 'O']
     const initGame = () => {
        console.log('Initialising Game')
        return {
            isPopupOpen: false,
            setWinner: null,
            // Choisir si le premier est X ou O
            playingSymbol: symbols[Math.floor(Math.random() * symbols.length)],
            oneMoreTime: false
        }
    }
    const [gameState, setGameState] = useState(() => initGame())
    const [winner, setWinner] = useState<string | null>(null)

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [oneMoreTime, setOneMoreTime] = useState(false);

    useEffect(() => {
        console.log('Game Mounted');
        return () => {
            console.log('Game Unmounted');
        };
    }, []);

    useEffect(() => {
        if(winner != null) {
            console.log('Bravo ' + winner + ' a gagné !')
            // Voulez-vous rejouer ?
            setIsPopupOpen(true)
        }
    }, [winner])

    const resetGame = () => {
        console.log('Resetting Game')
        setGameState(initGame())
    }
    const handleBoardSendingWinner = (e) => {
        console.log('HandlingBoardUpdate')
        setWinner(e.winner)
    }

    const handlePopupConfirm = () => {
        console.log('Popup confirmed')
        setIsPopupOpen(false)
        setOneMoreTime(true)
        resetGame()
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className={`font-bold text-center mb-10 mt-0`}>TIC TAC TOE</h1>
            <div className={`${isPopupOpen ? 'filter blur-md' : ''}`}>
                <Board playingSymbol={gameState.playingSymbol} boardSendingWinner={handleBoardSendingWinner} oneMoreTime={oneMoreTime}/>
                {isPopupOpen && (
                    <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} onConfirm={handlePopupConfirm} winner={winner} />
                )}
            </div>
        </div>
    )
}

export default Game
