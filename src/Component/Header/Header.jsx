import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
          <h1>Order Your Favorite Food</h1>
          <p>Delicious meals delivered right to your doorstep. Fast, fresh, and easy!</p>
          <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header