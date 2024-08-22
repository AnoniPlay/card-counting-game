import React from 'react'


const Header = () => (
  <header className='mb3 h5'>
    <div>♥️♠️♦️♣️️</div>
    <h1 className='m0 h2'>Wong-Halves Practice</h1>
    <p className='m0'>
      Wong-Halves is a simple card counting system used in blackjack.
      It assigns a value of +1,+2,+3 0, or -1,-2 for every card that's played:
      2,7 → +1, 3,4,6 → +2, 5 → +3, 8 → 0, 9 → 0,  10-A → -2.
    </p>
  </header>
)

export default Header
