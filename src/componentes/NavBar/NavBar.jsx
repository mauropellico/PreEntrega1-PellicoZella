import React from 'react'
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <header>
        <h1>Ganados Online</h1>
        <nav>
            <ul>
                <li>Vacunos</li>
                <li>Ovinos</li>
                <li>Porcinos</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar