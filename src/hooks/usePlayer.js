import { useState } from 'react'

import { radomTetromino } from '../tetrominos'

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: radomTetromino().shape,
    collided: false,
  })

  return [player]
}