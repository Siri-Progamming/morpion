import {useState} from 'react'

function Square(props) {
    // const id = props.id
    const {onClickOnSquare} = props
    const initialValue = props.initialValue
    const beginningSymbol = props.symbol
    const isFirst = props.isFirst
    const [symbol, setSymbol] = useState(initialValue)

    const handleClick = () => {
        if (symbol === '') {
            if(isFirst){
                setSymbol(beginningSymbol)
                if(beginningSymbol === 'X'){
                    onClickOnSquare({symbol: 'O'})
                }else{
                    onClickOnSquare({symbol: 'X'})
                }
            }
            else if (symbol === 'X') {
                setSymbol('O')
                onClickOnSquare({symbol: 'O'})
            } else {
                setSymbol('X')
                onClickOnSquare({symbol: 'X'})
            }
        } else {
            console.log('Vous ne pouvez pas jouer ici')
        }
    }
    return (
        <div
            className="border-4 border-black p-5 w-36 h-36
                        flex place-content-center items-center
                        cursor-pointer
                        hover:border-purple-900 hover:border-5
                        text-6xl text-white font-bold"
            onClick={() => {
                handleClick()
            }}
        >{symbol}</div>
    )
}

export default Square
