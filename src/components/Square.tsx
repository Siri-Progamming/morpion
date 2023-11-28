import {useState} from 'react'

function Square(props) {
    // const id = props.id
    const {onClickOnSquare} = props
    const initialValue = props.initialValue
    const playingSymbol = props.playingSymbol
    const id = props.id
    const [squareSymbol, setSquareSymbol] = useState(initialValue)
    const [isPlayed, setIsPlayed] = useState(false)

    const handleClick = () => {
        if (squareSymbol === '') {
            const nextSymbol = playingSymbol === 'X' ? 'O' : 'X'
            setSquareSymbol(playingSymbol)
            setIsPlayed(true)
            // Envoi du prochain symbole qui doit jouer
            onClickOnSquare({playingSymbol: nextSymbol,playedSymbol: playingSymbol, id: id})
        } else {
            console.log('Vous ne pouvez pas jouer ici')
        }
    }
    return (
        <div
            className={`border-4 border-black p-5 w-36 h-36
                        flex place-content-center items-center
                        cursor-pointer
                        hover:border-purple-900 hover:border-5
                        text-6xl text-black font-bold
                        grid-item m-0
                        ${isPlayed && squareSymbol === 'X' ? 'bg-emerald-400' : ''}
                        ${isPlayed && squareSymbol === 'O' ? 'bg-fuchsia-700' : ''}
                        `}
            onClick={() => {
                handleClick()
            }}
        ></div>
    )
}

export default Square
