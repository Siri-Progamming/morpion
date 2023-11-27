import Square from './Square.tsx'
import {useEffect, useState} from "react";

function Board(props) {
    const {onBoardUpdate} = props
    const symbol = props.symbol
    const initialValue = props.initialValue
    const isFirst = props.isFirst

    useEffect(() => {
        console.log('Premier à commencer : ', symbol)
    }, [])

    const generateSquares = () => {
        const squares = []
        for (let i = 0; i < 9; i++) {
            squares.push(<Square key={i} initialValue={initialValue} symbol={symbol} isFirst={isFirst} onClickOnSquare={handleClickOnSquare}/>)
        }
        return squares
    }

    const handleClickOnSquare = (e) => {
        onBoardUpdate({symbol: e.symbol, isFirst: false})
    }

    return (
        <>
            <div className="grid grid-cols-3
                            border-4 border-black"
            >
                {generateSquares()}
            </div>

        </>
    )
}

export default Board
