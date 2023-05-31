import React from 'react'

export const IndexPage = () => {
  return (
    <div>
        <nav className='nav-div'>
            <a href=" ">
                <div className='nav-wrapper App-logo'>
                </div>
                <span className='logo' >Carrito</span>
            </a>
        </nav>
        <main>
            <div className='search-box-wrapper'>
                <input type='text' placeholder='Buscar..' className='search-box'/>
            </div>
        </main>
    </div>
  )
}
