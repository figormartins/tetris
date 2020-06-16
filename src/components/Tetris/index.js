import React from 'react'

import { createStage } from '../../gameHelpers'

import Stage from '../Stage'
import Display from '../Display'
import StartButton from '../StartButton'

import { Wrapper, StyledTetris } from './styles'

const Tetris = () => {
    return (
        <Wrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    <StartButton />
                </aside>
            </StyledTetris>
        </Wrapper>
    )
}

export default Tetris