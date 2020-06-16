import React, { useState } from 'react'

import { usePlayer } from '../../hooks/usePlayer'
import { useStage } from '../../hooks/useStage'

import Stage from '../Stage'
import Display from '../Display'
import StartButton from '../StartButton'

import { Wrapper, StyledTetris } from './styles'

const Tetris = () => {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player] = usePlayer()
    const [stage, setStage] = useStage(player)

    return (
        <Wrapper>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                            <div>
                                <Display text="Score" />
                                <Display text="Rows" />
                                <Display text="Level" />
                            </div>
                        )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </Wrapper>
    )
}

export default Tetris