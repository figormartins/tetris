import React from 'react'
import { Button } from './styles'

const StartButton = ({ callback }) => (
    <Button onClick={callback}>Start Game</Button>
)

export default StartButton